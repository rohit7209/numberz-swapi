import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CONSTANTS from './../../utils/constants';
import ColorBox from './../ColorBox';
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

const InfoBar1 = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #636363;
  &>div{
    font-size: 35px;
    font-weight: lighter;
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
  color: #636363;
  &>div>span{
    font-size: 13px;
  }
  &>div{
    padding: 15px;
  }
  &>div:first-child{
    padding-left: 0px;
  }
  & div{
    margin: auto;
  }
`;


const Footer = styled.div`
  height: 20px;
  background: ${CONSTANTS.color.people};
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
`;

const Wrapper = styled.div`
  height: 100%;
`;


class PeopleMoreCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    console.log('props:', details);
    return (
      <Wrapper>
        <BasicInfo style={{ color: CONSTANTS.color.people }}>
          {details.name}<br />
          <span><i className="fa fa-birthday-cake" /> {details.birth_year}, {details.gender}</span>
        </BasicInfo>

        <div style={{ display: 'flex', padding: '0px 50px', marginTop: '20px' }}>
          <ColorInfo>
            <div><ColorBox color={details.hair_color} /><span>Hair</span></div>
            <div><ColorBox color={details.skin_color} /><span>Skin</span></div>
            <div><ColorBox color={details.eye_color} /><span>Eye</span></div>
          </ColorInfo>
          <InfoBar1>
            <div>{details.height}<span>Cms</span></div>
            <div>{details.mass}<span>Kgs</span></div>
          </InfoBar1>
        </div>

        <InfoBar2>
          <LazyLink list={details.films} type="films" />
          <LazyLink list={details.vehicles} type="vehicles" />
          <LazyLink list={details.starships} type="starships" />
        </InfoBar2>
        <Footer />
      </Wrapper>
    );
  }
}

PeopleMoreCode.propTypes = {};

export default PeopleMoreCode;
