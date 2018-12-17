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
  background: ${CONSTANTS.color.planets};
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

const PlanetsMoreCode = ({ details }) =>
  <Wrapper>
    <BasicInfo style={{ color: CONSTANTS.color.planets }}>
      {details.name}<br />
      <span><i className="fa fa-users" /> {details.population}</span>
    </BasicInfo>

    <Table>
      <tbody>
        <tr>
          <td>gravity:</td><td><span>{details.gravity}</span></td>
          <td>orbital period:</td><td><span>{details.orbital_period}</span></td>
        </tr>
        <tr>
          <td>climate:</td><td><span>{details.climate}</span></td>
          <td>rotation period:</td><td><span>{details.rotation_period}</span></td>
        </tr>
        <tr>
          <td>surface water:</td><td><span>{details.surface_water}</span></td>
          <td>diameter:</td><td><span>{details.diameter}</span></td>
        </tr>
      </tbody>
    </Table>

    <div style={{ padding: '0px 50px', color: CONSTANTS.color.planets }}><strong>Terrain: {details.terrain}</strong></div>

    <InfoBar2>
      <LazyLink list={details.films} type="films" />
      <LazyLink list={details.residents} type="people" />
      <LazyLink list={details.starships} type="starships" />
    </InfoBar2>
    <Footer />
  </Wrapper>;

PlanetsMoreCode.propTypes = {};

export default PlanetsMoreCode;
