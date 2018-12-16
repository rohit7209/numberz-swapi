import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Utils from './../../utils';
import { requestTypeList } from './actions';
import { reset } from './../Filters/actions';
import { reset as resetMoreInfo } from './../MoreInfoScreen/actions';
import Filters from './../Filters';
import Hr from './../../components/Hr';
import PeopleCard from './../../components/PeopleCard';
import PlanetsCard from './../../components/PlanetsCard';
import VehiclesCard from './../../components/VehiclesCard';
import SpaceshipsCard from './../../components/SpaceshipsCard';
import FilmsCard from './../../components/FilmsCard';
import SpeciesCard from './../../components/SpeciesCard';
import Button from './../../components/Button';
import Loader from './../../components/Loader';
import MoreInfoScreen from './../../containers/MoreInfoScreen';

const Card = (props) => {
  switch (props.type.toUpperCase()) {
    case 'PEOPLE': return <PeopleCard {...props} />;
    case 'PLANETS': return <PlanetsCard {...props} />;
    case 'VEHICLES': return <VehiclesCard {...props} />;
    case 'STARSHIPS': return <SpaceshipsCard {...props} />;
    case 'FILMS': return <FilmsCard {...props} />;
    case 'SPECIES': return <SpeciesCard {...props} />;
    default: return <div />;
  }
};

Card.propTypes = {
  details: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  displayMoreInfo: PropTypes.func.isRequired,
};


const Wrapper = styled.div`
  display: flex;

`;

const Col1 = styled.div`
  width: 200px;
  padding: 30px 20px;
  min-height: 80vh;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    z-index: 100;
    width: 1px;
    height: 96%;
    right: -1px;
    top: 2%;
    background: #d3d3d3;
  }
`;

const Col2 = styled.div`
  width: calc(100% - 281px);
  padding: 20px;
  border-right: 1px solid grey;  
`;

class Explorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.requestInfo();
  }

  identifyFilter = (key, value) => {
    const tempInt = parseInt(value, 10);
    if (['created', 'edited'].includes(key)) return null;
    else if (Number.isInteger(tempInt)) return { key, type: 'NUMBER', min: tempInt, max: tempInt };
    else if (key.toLowerCase().includes('color')) return { key, type: 'COLOR', list: [value] };
    else if (key.toLowerCase().includes('gender')) return { key, type: 'GENDER', list: [value] };
    return null;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.explorer.list !== nextProps.explorer.list) {
      const list = nextProps.explorer.list;
      const firstItem = list[0];

      const filterMap = {};

      Object.keys(firstItem).forEach(key => {
        const filter = this.identifyFilter(key, firstItem[key])
        if (filter) filterMap[key] = filter;
      });

      list.forEach(item => {
        Object.keys(filterMap).forEach(key => {
          switch (filterMap[key].type) {
            case 'NUMBER':
              const tempInt = parseInt(item[key], 10);
              if (tempInt < filterMap[key].min) filterMap[key].min = tempInt;
              else if (tempInt > filterMap[key].max) filterMap[key].max = tempInt;
              break;
            case 'COLOR':
            case 'GENDER':
              if (!filterMap[key].list.includes(item[key])) filterMap[key].list.push(item[key]);
              break;
            default: ;
          }
        })
      });

      this.setState({
        filterMap,
        list,
        currentPage: nextProps.explorer.next ? `Page ${nextProps.explorer.next.split('=')[1] - 1}` : null,
      });
    }

    if (this.props.filters !== nextProps.filters) {
      this.filterList(nextProps);
    }

    if (this.props.location !== nextProps.location) this.requestInfo(nextProps)
  }

  requestInfo = (props = this.props) => {
    // this.props.resetMoreInfo();
    this.setState({
      filterMap: {},
      list: [],
      type: props.match.params.type,
      moreInfoUrl: Utils.getParams(props.location.search).url,
    }, () => props.requestTypeList({ type: this.state.type, page: 1 }))
  }

  filterList = (props = this.props) => {
    const filters = props.filters;
    const list = props.explorer.list.filter(item => Object.keys(filters).reduce((a, key) => {
      let flag = true;
      if (Array.isArray(filters[key]) && filters[key].length) {
        flag = filters[key].includes(item[key]);
      } else if (Number.isInteger(parseInt(filters[key], 10)) && Number.isInteger(parseInt(item[key], 10))) {
        flag = parseInt(item[key], 10) <= parseInt(filters[key], 10);
      }
      return a && flag;
    }, true));
    this.setState({ list });
  }

  requestPage = (type) => {
    this.props.resetFilters();
    this.props.requestTypeList({ type: this.state.type, page: this.props.explorer[type].split('=')[1] })
  };

  displayMoreInfoScreen = (moreInfoUrl) => this.setState({ moreInfoUrl })
  hideMoreInfoScreen = () => this.setState({ moreInfoUrl: null })

  render() {
    // console.log('list::', this.props, this.state);
    return (
      <Wrapper>
        <Col1>
          {this.props.explorer.requesting ? <Loader /> : <Filters filterMap={this.state.filterMap} />}
          {/* <Filters filterMap={this.state.filterMap} /> */}
        </Col1>
        <Col2>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ padding: '5px' }}>showing {this.state.list.length} of {this.props.explorer.count || 0} in {this.state.currentPage || 'last page'}</div>
            <div>
              {(this.props.explorer.previous) ? <Button sm onClick={() => this.requestPage('previous')}><strong>Prev</strong></Button> : null}&nbsp;
              {(this.props.explorer.next) ? <Button sm onClick={() => this.requestPage('next')}><strong>Next</strong></Button> : null}
            </div>
          </div>
          <Hr />
          {!this.props.explorer.requesting && this.state.list.length > 0 ?
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
              {this.state.list.map(item => <Card key={item.url} displayMoreInfo={this.displayMoreInfoScreen} details={item} type={this.state.type} />)}
            </div> : <Loader />
          }
        </Col2>

        {this.state.moreInfoUrl ? <MoreInfoScreen type={this.state.type} url={this.state.moreInfoUrl} hide={this.hideMoreInfoScreen} /> : null}
      </Wrapper >
    );
  }
}

Explorer.propTypes = {
  explorer: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  requestTypeList: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  resetMoreInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  explorer: state.ExplorerReducer,
  filters: state.FilterReducer,
});

const mapDispatchToProps = dispatch => ({
  requestTypeList: (payload) => dispatch(requestTypeList(payload)),
  resetFilters: (payload) => dispatch(reset(payload)),
  resetMoreInfo: (payload) => dispatch(resetMoreInfo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Explorer);
