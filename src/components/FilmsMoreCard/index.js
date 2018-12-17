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
  background: ${CONSTANTS.color.films};
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const OpeningCrawl = styled.div`
  padding: 0px 50px 15px 50px;
  font-size: 14px;

  color: #434343;

  &>div:first-child{
    font-weight: bold;
    padding: 10px 0px;
  }
  &>div:last-child{
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;  
  }
`;


const VehiclesMoreCard = ({ details }) =>
  <Wrapper>
    <BasicInfo style={{ color: CONSTANTS.color.films }}>
      {details.title}<br />
      <span><i className="fa fa-film" /> {details.release_date.split('-').reverse().join('-')}</span><br />
      <span><i className="fa fa-user" /> {details.producer}</span>
    </BasicInfo>

    <OpeningCrawl>
      <div>OPENING CRAWL</div>
      <div>{details.opening_crawl}</div>
    </OpeningCrawl>

    <InfoBar2>
      <LazyLink list={details.characters} type="people" />
      <LazyLink list={details.planets} type="planets" />
      <LazyLink list={details.species} type="species" />
      <LazyLink list={details.starships} type="starships" />
      <LazyLink list={details.vehicles} type="vehicles" />
    </InfoBar2>
    <Footer />
  </Wrapper>;

VehiclesMoreCard.propTypes = {};

export default VehiclesMoreCard;
