import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CONSTANTS from './../../utils/constants';

const Wrapper = styled.div`
  width: 350px;
  margin: 10px;
  color: #838383;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 3px #00000030;
`;

const BasicInfo = styled.div`
  padding: 20px 25px 10px 25px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${CONSTANTS.color.films};
  &>span{
    font-size: 12px;
  }
`;

const InfoBar2 = styled.div`
  background: #f3f3f3;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  &>div{
    font-size: 17px;
    line-height: 15px;
    font-weight: bold;
  }
  &>div>span{
    font-size: 10px;
    font-weight: normal;
  }
`;

const Footer = styled.div`
  padding: 20px;
  background: ${CONSTANTS.color.films};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 40px);
  margin: 0px 20px 15px 20px;
  font-size: 12px;
  & td{
    padding: 5px;
  }
  & span{
    color: #434343;
    font-weight: bold;
  }
`;

const OpeningCrawl = styled.div`
  padding: 0px 25px 15px 25px;
  font-size: 12px;

  &>div:first-child{
    font-weight: bold;
  }
  &>div:last-child{
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;  
  }
  // overflow: hidden;
`;

const VehiclesCard = ({ details, displayMoreInfo }) =>
  <Wrapper>
    <BasicInfo>
      {details.title}<br />
      {/* <span>MODEL: {details.model}</span><br /> */}
      <span><i className="fa fa-film" /> {details.release_date.split('-').reverse().join('-')}</span>
    </BasicInfo>

    <OpeningCrawl>
      <div>OPENING CRAWL</div>
      <div>{details.opening_crawl}</div>
    </OpeningCrawl>

    <InfoBar2>
      <div>
        {(details.characters || []).length}<br /><span>characters</span>
      </div>
      <div>
        {(details.planets || []).length}<br /><span>planets</span>
      </div>
      <div>
        {(details.species || []).length}<br /><span>species</span>
      </div>
      <div>
        {(details.starships || []).length}<br /><span>starships</span>
      </div>
    </InfoBar2>

    <Footer onClick={() => this.props.displayMoreInfo(details.url)}>View More</Footer>

  </Wrapper>;

VehiclesCard.propTypes = {
  displayMoreInfo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

export default VehiclesCard;
