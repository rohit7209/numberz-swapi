import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ColorBox from './../ColorBox';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  margin: 20px 0px;
`;

const Text = styled.div`
  width: 100%;
  font-size: 15px;
`;

class ColorOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (color, value) => this.setState({ [color]: value }, () => this.props.onChange(Object.keys(this.state).filter(key => this.state[key])));

  render() {
    return (
      <Wrapper>
        <Text>{this.props.text}</Text>
        {this.props.list.map(color => <ColorBox key={color} checked={(this.props.defaultValue || []).includes(color)} onChange={(e) => this.onChange(color, e)} color={color} />)}
      </Wrapper>
    );
  }
}

ColorOptions.propTypes = {
  list: PropTypes.array.isRequired,
  text: PropTypes.string,
  defaultValue: PropTypes.array,
};

ColorOptions.defaultProps = {
  text: 'Color',
  list: [],
}

export default ColorOptions;
