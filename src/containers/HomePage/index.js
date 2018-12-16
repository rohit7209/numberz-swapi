import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import CONSTANTS from './../../utils/constants';
import { Banner, Wave1, Wave2, Nav, Text, Section, AlienImg, CharacterImg, WavePadding, Box } from './styled';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Banner>
          <Wave1 src={require('./../../assets/left-wave.png')} />

          <AlienImg src={require('./../../assets/alien1.jpeg')} />

          <Nav>
            <tbody>
              <tr>
                <td>
                  <Box to="/explorer/planets" color={CONSTANTS.color.planets}>
                    <i className="fa fa-globe" />
                    <span>Planets</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer/starships" color={CONSTANTS.color.starships}>
                    <i className="fa fa-space-shuttle" />
                    <span>Spaceships</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer/vehicles" color={CONSTANTS.color.vehicles}>
                    <i className="fa fa-car" />
                    <span>Vehicles</span>
                  </Box>
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <Box to="/explorer/people" color={CONSTANTS.color.people}>
                    <i className="fa fa-child" />
                    <span>People</span>
                  </Box>
                </td>
                <td>
                  <Box to="/explorer/films" color={CONSTANTS.color.films}>
                    <i className="fa fa-ticket" />
                    <span>Films</span>
                  </Box>
                </td>
              </tr>
              <tr>
                <td />
                <td />
                <td>
                  <Box to="/explorer/species" color={CONSTANTS.color.species}>
                    <i className="fa fa-users" />
                    <span>Species</span>
                  </Box>
                </td>
              </tr>
            </tbody>
          </Nav>

          <Text>
            <p>From all the <strong style={{ color: '#EC954F' }}>SEVEN</strong> Star Wars films</p>
            <h1>Now with The Force Awakens data!</h1>
            <div>Planets, Spaceships, Vehicles, People, Films and Species</div>
          </Text>
        </Banner>

        <Wave2 src={require('./../../assets/footer_wave.png')} />

        <WavePadding>
          Popular Characters
        </WavePadding>

        <Section>
          <Link to="/explorer/people/?url=https://swapi.co/api/people/1/"><CharacterImg src={require('./../../assets/alien5.jpg')} /></Link>
          <Link to="/explorer/people/?url=https://swapi.co/api/people/20/"><CharacterImg src={require('./../../assets/alien2.jpeg')} /></Link>
          <Link to="/explorer/people/?url=https://swapi.co/api/people/10/"><CharacterImg src={require('./../../assets/alien3.jpg')} /></Link>
          <Link to="/explorer/people/?url=https://swapi.co/api/people/4/"><CharacterImg src={require('./../../assets/alien4.png')} /></Link>
          <Link to="/explorer/people/?url=https://swapi.co/api/people/2/"><CharacterImg src={require('./../../assets/alien6.png')} /></Link>
        </Section>

      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
