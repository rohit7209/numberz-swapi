import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Box = styled.div`
  width: ${props => props.round ? '10' : '20'}px;
  height: ${props => props.round ? '10' : '20'}px;
  display: flex;
  background: ${props => props.color || '#ffffff'};
  margin: ${props => props.inner ? '0px' : '5px 5px 0px 0px'};
  border: ${props => props.inner ? '0' : '1'}px solid #354B6F;
  position: relative;
  cursor: ${props => props.active ? 'pointer' : 'auto'};
  transition: 0.4s;
  border-radius: ${props => props.round ? '50px' : '0'}
  overflow: hidden;

  &>i{
    position: absolute;
    top: 0;
    left: 0;
    background: #00000060;
    color: #d3d3d3;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;
    font-size: 13px;
    display: ${props => props.checked ? 'block' : 'none'};
  }
`;

class ColorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      active: typeof this.props.onChange === 'function',
    };
  }

  onChange = () => this.state.active ? this.setState({ checked: !this.state.checked }, () => this.props.onChange(this.state.checked)) : null;

  render() {    
    return (
      <Box
        onClick={this.onChange}
        active={this.state.active}
        title={this.props.color}
        checked={this.state.checked}
        round={this.props.round}
      >
        {this.props.color.split(', ').map(color => <Box active={this.state.active} key={color} inner color={color} />)}
        <i className="fa fa-check" />
      </Box>
    )
  }
}

ColorBox.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string.isRequired,
  round: PropTypes.bool,
};

export default ColorBox;
