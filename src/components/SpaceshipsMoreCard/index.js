import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CONSTANTS from './../../utils/constants';
import LazyLink from './../../containers/LazyLink';


const BasicInfo = styled.div`
  padding: 35px 50px;
  font-size: 37px;
  font-weight: lighter;
  text-transform: uppercase;
  &>span{
    font-size: 15px;
    // color: #939393;
  }
`;

const InfoBar2 = styled.div`
  background: #f3f3f3;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 0;
`;

const Footer = styled.div`
  height: 20px;
  background: ${CONSTANTS.color.starships};
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 100px);
  margin: 0px 50px 15px 50px;
  font-size: 13px;
  text-transform: uppercase;
  & td{
    padding: 5px;
    // border: 1px solid red;
  }

  & span{
    text-transform: lowercase;
    font-size: 21px;
    color: #434343;
    font-weight: bold;
  }
`;


const Block = styled.div`
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
  &>span{
    font-size: 30px;
  }
`;

const SpaceshipsMoreCard = ({ details }) =>
  <Wrapper>
    <BasicInfo style={{ color: CONSTANTS.color.starships }}>
      {details.name}<br />
      <span><i className="fa fa-inr" /> {details.cost_in_credits}, {details.starship_class}</span><br />
      <span><i className="fa fa-industry" /> {details.manufacturer}</span>
    </BasicInfo>

    <Table>
      <tbody>
        <tr>
          {/* <td>climate: <span>{details.climate}</span></td> */}
          <td>cargo capacity:</td><td> <span>{details.cargo_capacity}</span></td>
          <td>consumables:</td><td> <span>{details.consumables}</span></td>
        </tr>
        <tr>
          {/* <td>terrain: <span>{details.terrain}</span></td> */}
          <td>length:</td><td> <span>{details.length}</span></td>
          <td>max speed: </td><td><span>{details.max_atmosphering_speed}</span></td>
        </tr>
      </tbody>
    </Table>

    <div style={{ padding: '0px 50px', color: CONSTANTS.color.starships }}><strong>MGLT: {details.MGLT}</strong></div>

    <InfoBar2>
      <LazyLink list={details.pilots} type="people" />
      <Block><div>CREW</div><span>{details.crew}</span></Block>
      <Block><div>passengers</div><span>{details.passengers}</span></Block>
      <LazyLink list={details.films} type="films" />
    </InfoBar2>
    <Footer />
  </Wrapper>;

SpaceshipsMoreCard.propTypes = {};

export default SpaceshipsMoreCard;
