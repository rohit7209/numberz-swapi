import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  background: ${props => props.checked ? '#354B6F' : '#ffffff'};
  color: ${props => props.checked ? '#ffffff' : '#354B6F'};
  margin: 5px 5px 0px 0px;
  border: 1px solid #354B6F;
  position: relative;
  cursor: pointer;
  transition: 0.4s;
  text-align:center;

  &>i:first-child{
    font-size: 30px;
    padding: 5px 10px;
  }
  &>span{
    font-size: 11px;
    font-weight: bold;
    margin: auto;
  }
`;

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


class GenderOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    (this.props.defaultValue || []).forEach(gender => {
      this.setState({ [gender]: true });
    });
  }

  onClick = (key) => this.setState({ [key]: !this.state[key] }, () => this.props.onChange(Object.keys(this.state).filter(key => this.state[key])));

  render() {
    return (
      <Wrapper>
        <Text>{this.props.text}</Text>
        {this.props.list.map(gender =>
          <Box key={gender} checked={this.state[gender]} onClick={() => this.onClick(gender)}>
            {(['male', 'female'].includes(gender)) ? <i className={`fa fa-${gender}`} /> : <span>{gender}</span>}
          </Box>
        )}
      </Wrapper>
    );
  }
}

GenderOptions.propTypes = {
  list: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenderOptions;
