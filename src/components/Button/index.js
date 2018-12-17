import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
  color: #354B6F;
  font-size: ${props => props.sm ? '15px' : '20px'};
  padding: ${props => props.sm ? '5px 10px' : '10px 20px'}
  border: ${props => props.alt ? 'none' : '1px solid #354B6F'};
  background: transparent;
  cursor: pointer;
  outline: none;
`;


const Button = (props) => <Btn {...props}>{props.children}</Btn>;

Button.propTypes = {
  children: PropTypes.any,
  alt: PropTypes.any,
  sm: PropTypes.bool,
};

Button.defaultProps = {
  children: 'Submit',
};

export default Button;
