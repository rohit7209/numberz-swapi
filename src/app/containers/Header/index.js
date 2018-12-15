import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: #354B6F;
  display:flex;
  border-bottom: 1px solid #354B6F;
`;

const Content = styled.div`
  width: 100%;
  text-align: right;
  line-height: 100%;
  padding: 30px;
  font-weight: bold;
  font-size: 14px;
  &>span{
    float: left;
    color: white;
  }
  &>a, &>a:visited, &>a:active, &>a:focus{
    text-decoration: none;
    color: white;
    margin: auto 20px;
  }
`;

const Logo = styled.div`
  background: white;
  padding: 7px 35px;
  &>img{
    width: 120px;
  }
`;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Logo><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" /></Logo>
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
