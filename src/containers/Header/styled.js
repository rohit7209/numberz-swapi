import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  background: #354B6F;
  display:flex;
  border-bottom: 1px solid #354B6F;
`;

export const Content = styled.div`
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

export const Logo = styled(Link) `
  background: white;
  padding: 7px 35px;
  &>img{
    width: 120px;
  }
`;