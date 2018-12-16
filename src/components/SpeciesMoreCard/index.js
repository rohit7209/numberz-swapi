import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CONSTANTS from './../../utils/constants';
import ColorBox from './../ColorBox';
import LazyLink from './../../containers/LazyLink';
// import Button from './../../components/Button';


const BasicInfo = styled.div`
  padding: 35px 50px 15px 50px;
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
  padding: 10px 0 0 20px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  color: #636363;

  &>div{
    font-weight: lighter;
  }

  &>div:not(:last-child){
    font-size: 35px;
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
  background: ${CONSTANTS.color.species};
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

const Btn = styled(Link) `
  display: block;
  padding: 4px 8px;
  background: ${CONSTANTS.color.species};
  margin: 10px;
  border-radius: 4px;
  &, &:visited{
    color: white;
    text-decoration: none;
  }
`;

class SpeciesMoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    console.log('props:', details);
    return (
      <Wrapper>
        <BasicInfo style={{ color: CONSTANTS.color.species }}>
          {details.name}<br />
          <span><i className="fa fa-language" /> {details.language}</span>
        </BasicInfo>

        <div style={{ display: 'flex', padding: '0px 50px', marginTop: '0px' }}>
          <ColorInfo>
            <div><ColorBox color={details.hair_colors} /><span>Hair</span></div>
            <div><ColorBox color={details.skin_colors} /><span>Skin</span></div>
            <div><ColorBox color={details.eye_colors} /><span>Eye</span></div>
          </ColorInfo>
          <InfoBar1>
            <div>{details.average_height}<span>Cms</span></div>
            <div>{details.average_lifespan}<span>Yrs</span></div>
            <div><Btn to={`/explorer/planets?url=${details.homeworld}`}>Home World <i className="fa fa-external-link-square" /></Btn></div>
          </InfoBar1>
        </div>

        <Table>
          <tbody>
            <tr>
              {/* <td>climate: <span>{details.climate}</span></td> */}
              <td>classification:</td><td> <span>{details.classification}</span></td>
              <td>population:</td><td> <span>NA</span></td>
            </tr>
            <tr>
              {/* <td>terrain: <span>{details.terrain}</span></td> */}
              <td>designation:</td><td> <span>{details.designation}</span></td>
              <td>language: </td><td><span>{details.language}</span></td>
            </tr>
          </tbody>
        </Table>

        <InfoBar2>
          <LazyLink list={details.films} type="films" />
          <LazyLink list={details.planets} type="planets" />
          <LazyLink list={details.people} type="people" />
        </InfoBar2>
        <Footer />
      </Wrapper>
    );
  }
}

SpeciesMoreCard.propTypes = {};

export default SpeciesMoreCard;
