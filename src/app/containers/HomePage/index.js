import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CONSTANTS from './../../utils/constants';

// import Explorer from './../Explorer';

const Banner = styled.div`
  width: 100%;
  height: 60vh;
  // background: green;
  overflow: hidden;
  position: relative;
`;

const Table = styled.table`
  border-collapse: collapse;
  position: absolute;
  right: 5px;
  top: 5px;
  & td{
    width: 130px;
    height: 130px;
    padding: 5px;
    // border: 1px solid yellow;
  }
`;

const Box = styled(Link) `
  display: block;

  background: #ffffff;
  border: 1px solid ${props => props.color || '#354B6F'};
  color: ${props => props.color || '#354B6F'};

  width: calc(100% - 20px);
  height: 100%;
  padding: 10px;
  position: relative;
  text-align: center;
  z-index: 1;
  transition: 0.4s;

  &:hover{
    transform: scale(1.05);
    background: red;
    z-index: 100;
    background: ${props => props.color || '#354B6F'};
    color: #ffffff;
  }

  &>i{
    margin: auto;
    font-size: 40px;
    line-height: 90px;
    transition: 0.4s;
  }

  &>i:hover{
    transform: scale(1.3);
  }

  &>span{
    margin: auto;
    position: absolute;
    bottom : 20px;
    width: 100%;
    left:0px;
    font-size: 13px;
  }
`;

const AlienImg = styled.img`
  width: 210px;
  position: absolute;
  bottom: 20px;
  left 20px;
`;

const Text = styled.div`
  text-align: left;
  // background: red;
  position: absolute;
  top: 25%;
  left: 18%;

  &>p{
    font-size: 15px;
    color: #354B6F;
  }

  &>h1{
    font-size: 37px;
    color: #EC954F;
    margin-top: -10px;
  }

  &>div{
    float: right;
    background: #354B6F;
    padding: 4px 8px;
    color: #ffffff;
    font-size: 11px;
    text-transform: lowercase;
  }

`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

        <Banner>
          <AlienImg src={require('./../../assets/alien1.jpeg')} />
          <Table>
            <tbody>
              <tr>
                <td>
                  <Box to="/explorer?type=planets" color={CONSTANTS.color.planets}>
                    <i className="fa fa-globe" />
                    <span>Planets</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer?type=starships" color={CONSTANTS.color.starships}>
                    <i className="fa fa-space-shuttle" />
                    <span>Spaceships</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer?type=vehicles" color={CONSTANTS.color.vehicles}>
                    <i className="fa fa-car" />
                    <span>Vehicles</span>
                  </Box>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <Box to="/explorer?type=people" color={CONSTANTS.color.people}>
                    <i className="fa fa-child" />
                    <span>People</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer?type=films" color={CONSTANTS.color.films}>
                    <i className="fa fa-ticket" />
                    <span>Films</span>
                  </Box>
                </td>
              </tr>
              <tr>
                <td />
                <td />
                <td>
                  <Box to="/explorer?type=species" color={CONSTANTS.color.species}>
                    <i className="fa fa-users" />
                    <span>Species</span>
                  </Box>
                </td>
              </tr>
            </tbody>
          </Table>


          <Text>
            {/* <span>All the Star Wars data you've ever wanted:</span>
            <h3>Planets, Spaceships, Vehicles, People, Films and Species</h3> */}
            <br />
            <p>From all the <strong style={{ color: '#EC954F' }}>SEVEN</strong> Star Wars films</p>
            <h1>Now with The Force Awakens data!</h1>
            <div>Planets, Spaceships, Vehicles, People, Films and Species</div>
          </Text>

        </Banner>

      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
