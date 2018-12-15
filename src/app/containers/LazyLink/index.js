import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestDetails } from './actions';
import CONSTANTS from './../../utils/constants';
import Button from './../../components/Button';
import styled from 'styled-components';
import Loader from '../../components/Loader';

const Btn = styled(Link) `
  display: inline-block;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 2px 3px;
  margin: 1px;
  max-width: 80px;
  font-size: 11px;
  border-radius: 3px;
  background: ${props => props.color}
  &, &:visited{
    text-decoration: none;
    color: white;
  }
`;

const Wrapper = styled.div`
  padding: 5px 0;
  font-size: 15px;
  line-height: 15px;
  font-weight: bold;
  position: relative;
  width: 33%;
  &:not(last-child):after{
    content: '';
    width: 1px;
    height: 70%;
    position: absolute;
    background: #d3d3d3;
    top: 15%;
    right: -1px;
  }
  &>div:first-child{
    padding: 10px;
    text-transform: uppercase;
  }
`;

class LazyLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.requestDetails({ list: this.props.list, type: this.props.type });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: nextProps })
  }

  render() {
    const details = this.props.lazyInfo.details[this.props.type];
    return (
      <Wrapper>
        <div>{this.props.type}</div>
        {details ? details.map(item => <Btn key={item.data.url} title={item.data.name || item.data.title} to={`/explorer/${this.props.type}/?url=${item.data.url}`} color={CONSTANTS.color[this.props.type]}>
          {item.data.name || item.data.title}
        </Btn>) : <Loader sm />}
        {details && details.length === 0 ? <div>NA</div> : null}
      </Wrapper>
    );
  }
}

LazyLink.propTypes = {};

const mapStateToProps = (state) => ({
  lazyInfo: state.LazyLinkReducer,
});

const mapStateToDispatch = (dispatch) => ({
  requestDetails: (payload) => dispatch(requestDetails(payload)),
});

export default connect(mapStateToProps, mapStateToDispatch)(LazyLink);
