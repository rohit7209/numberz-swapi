import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'range'
}) `
  margin: 20px 0px;
  -webkit-appearance: none;
  height: 5px;
  width: 100%;
  border-radius: 5px;   
  background: #d3d3d3;
  outline: none;

  &::-webkit-slider-thumb{
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%; 
    background: #354B6F;
    cursor: pointer;
    position: relative;
    z-index: 1;
    -webkit-transition: .2s;
    transition: .2s;  
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
  }
`;

const Wrapper = styled.div`
  // display: flex;
  position: relative;
  // border: 1px solid red;
`;

const Text = styled.div`
  font-size: 12px;
  // border: 1px solid red;
  position: absolute;
  top: 22px;
  color: #b3b3b3;
  &:first-child{
    left: 0px;
  }
  &:last-child{
    right: 0px;
  }
`;

const Title = styled.div`
  font-size: 15px;
`;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue || this.props.max,
    };
  }

  updateSliderValue = (e) => {
    // console.log('eeee::', e.target.value);
    this.setState({ value: e.target.value }, () => this.props.onChange(this.state.value));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== this.props.defaultValue) {
      this.setState({ value: nextProps.defaultValue });
    }
  }

  render() {
    return (
      <Wrapper style={{ width: '200px' }}>
        <Title>{this.props.text}</Title>
        <Text>{this.props.pre} {this.props.min} {this.props.post}</Text>
        <Input
          type="range"
          min={this.props.min}
          max={this.props.max}
          value={this.state.value}
          onChange={this.updateSliderValue}
        />
        <Text>
          {this.state.value ? this.props.pre : null}&nbsp;
          {this.state.value}
          {/* {parseInt(this.state.value, 10) === parseInt(this.props.min, 10) ? `Any (${this.props.max})` : this.state.value}&nbsp; */}
          {this.props.post}
        </Text>
      </Wrapper>
    );
  }
}

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  pre: PropTypes.any,
  post: PropTypes.any,
  text: PropTypes.string.isRequired,
};

export default Slider;
