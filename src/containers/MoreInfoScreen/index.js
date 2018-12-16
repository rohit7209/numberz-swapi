import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import CloseBtn from './../../components/CloseBtn';
import PeopleMoreCard from './../../components/PeopleMoreCard';
import PlanetsMoreCard from './../../components/PlanetsMoreCard';
import VehiclesMoreCard from './../../components/VehiclesMoreCard';
import SpaceshipsMoreCard from './../../components/SpaceshipsMoreCard';
import FilmsMoreCard from './../../components/FilmsMoreCard';
import SpeciesMoreCard from './../../components/SpeciesMoreCard';
import { requestMoreDetails, reset } from './actions';
import Loader from '../../components/Loader';
import CONSTANTS from './../../utils/constants';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #000000cc;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: 0.4s;
`;

const Card = styled.div`
  width: 100%;
  height: 55vh;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: white;
  transition: 0.4s;
  transform: translateY(${props => props.show ? '0vh' : '55vh'});
`;


const Error = styled.div`
  font-size: 30px
  font-weight: lighter;
  color: ${CONSTANTS.color.base};
  padding: 10px;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
`;

const MoreInfoComponent = (props) => {
  switch (props.type.toUpperCase()) {
    case 'PEOPLE': return <PeopleMoreCard {...props} />;
    case 'PLANETS': return <PlanetsMoreCard {...props} />;
    case 'VEHICLES': return <VehiclesMoreCard {...props} />;
    case 'STARSHIPS': return <SpaceshipsMoreCard {...props} />;
    case 'FILMS': return <FilmsMoreCard {...props} />;
    case 'SPECIES': return <SpeciesMoreCard {...props} />;
    default: return <div />;
  }
};


class MoreInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      loading: true,
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({ showCard: true });
    }, 100);

    // this.props.reset();
    this.props.requestDetails({
      type: this.props.type,
      id: this.props.url.split('/').reverse()[1],
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.moreInfo.requesting,
      details: nextProps.moreInfo.details,
    });

    if (this.props.url !== nextProps.url) {
      this.setState({ details: null, loading: true });
      nextProps.requestDetails({
        type: nextProps.type,
        id: nextProps.url.split('/').reverse()[1],
      });
    }
  }

  hideCard = () => {
    // this.props.reset();
    this.setState({ showCard: false });
    setTimeout(() => {
      this.props.hide();
    }, 400);
  }

  render() {
    return (
      <Wrapper>
        <Card show={this.state.showCard}>
          <CloseBtn onClick={this.hideCard} />
          {/* <MoreInfoComponent type={this.props.type} details={this.props.moreInfo.details} /> */}
          {(!this.state.loading && this.state.details) ?
            this.state.details.error ?
              <Error>Not Found :(</Error>
              :
              <MoreInfoComponent type={this.props.type} details={this.state.details} />
            : <Loader style={{ top: 'calc(50% - 15px', position: 'absolute', width: '100%' }} />
          }
        </Card>
      </Wrapper>
    );
  }
}

MoreInfoScreen.propTypes = {
  hide: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  moreInfo: state.MoreInfoReducer,
});

const mapDispatchToProps = (dispatch) => ({
  requestDetails: (payload) => dispatch(requestMoreDetails(payload)),
  reset: (payload) => dispatch(reset(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoreInfoScreen);
