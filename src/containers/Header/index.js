import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Logo, Content } from './styled';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Logo to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" /></Logo>
        <Content>
          <span>Assignment</span>
          <a href="http://rohitsharma.xyz" target="_blank">Profile</a>
          <a href="https://www.linkedin.com/in/rohit7209/" target="_blank">LinkedIn</a>
          <a href="https://github.com/rohit7209" target="_blank">Github</a>
        </Content>
      </Wrapper>
    );
  }
}

Header.propTypes = {};

export default Header;
