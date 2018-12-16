import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CONSTANTS from './../../utils/constants';
import ColorBox from './../ColorBox';

const Wrapper = styled.div`
  width: 350px;
  margin: 10px;
  color: #838383;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 3px #00000030;
`;

const BasicInfo = styled.div`
  padding: 20px 25px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  &>span{
    font-size: 12px;
    // color: #939393;
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

const InfoBar1 = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  &>div{
    font-size: 16px;
    line-height: 11px;
    font-weight: bold;
    margin-right: 10px;
  }
  &>div>span{
    font-size: 12px;
    font-weight: normal;
  }
`;

const ColorInfo = styled.div`
  display: flex;
  justify-content: flex-start
  text-align: center;
  &>div>span{
    font-size: 11px;
  }
  &>div{
    padding: 5px;
  }
  & div{
    margin: auto;
  }
`;

const Footer = styled.div`
  padding: 20px;
  background: ${props => props.color};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
`;

class SpeciesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;

    // console.log('der::', details);

    return (
      <Wrapper>
        <BasicInfo style={{ color: CONSTANTS.color.species }}>
          {details.name}<br />
          <span><i className="fa fa-language" /> {details.language}</span>
        </BasicInfo>

        <div style={{ display: 'flex', padding: '0px 20px' }}>
          <ColorInfo>
            <div><ColorBox round color={details.hair_colors} /><span>Hair</span></div>
            <div><ColorBox round color={details.skin_colors} /><span>Skin</span></div>
            <div><ColorBox round color={details.eye_colors} /><span>Eye</span></div>
          </ColorInfo>
          <InfoBar1>
            <div>{details.average_height}<span>Cms</span></div>
            <div>{details.average_lifespan}<span>Yrs</span></div>
          </InfoBar1>
        </div>

        <InfoBar2>
          <div>
            {(details.films || []).length}<br /><span>films</span>
          </div>
          <div>
            {(details.vehicles || []).length}<br /><span>vehicals</span>
          </div>
          <div>
            {(details.starships || []).length}<br /><span>starships</span>
          </div>
        </InfoBar2>

        <Footer onClick={() => this.props.displayMoreInfo(details.url)} color={CONSTANTS.color.species}>View More</Footer>

      </Wrapper>
    );
  }
}

SpeciesCard.propTypes = {
  displayMoreInfo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

export default SpeciesCard;
