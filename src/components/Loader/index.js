import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  text-align: center;
  color: #354B6F;
  font-size: ${props => props.sm ? '10px' : 'auto'}
`;

const Loader = (props) => <Wrapper sm={props.sm} className={props.className} style={{ ...props.style }}>
  <i className="fa fa-circle-o-notch fa-spin fa-lg" />
</Wrapper>;

Loader.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  sm: PropTypes.bool,
};

Loader.defaultProps = {
  style: {},
  className: '',
};

export default Loader;
