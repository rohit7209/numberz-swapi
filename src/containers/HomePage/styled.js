import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
`;

export const Nav = styled.table`
  border-collapse: collapse;
  position: absolute;
  right: 5px;
  top: 5px;
  & td{
    width: 130px;
    height: 130px;
    padding: 5px;
  }
`;

export const Box = styled(Link) `
  display: block;

  background: #ffffff;
  border: 1px solid ${props => props.color || '#354B6F'};
  color: ${props => props.color || '#354B6F'};

  width: calc(100% - 20px);
  height: 100%;
  padding: 10px;
  position: relative;
  text-align: center;
  z-index: 1;
  transition: 0.4s;

  &:hover{
    transform: scale(1.05);
    background: red;
    z-index: 100;
    background: ${props => props.color || '#354B6F'};
    color: #ffffff;
  }

  &>i{
    margin: auto;
    font-size: 40px;
    line-height: 90px;
    transition: 0.4s;
  }

  &>i:hover{
    transform: scale(1.3);
  }

  &>span{
    margin: auto;
    position: absolute;
    bottom : 20px;
    width: 100%;
    left:0px;
    font-size: 13px;
  }
`;

export const AlienImg = styled.img`
  width: 210px;
  position: absolute;
  bottom: -90px;
  left 0px;
  z-index: -1;
`;

export const Text = styled.div`
  text-align: left;
  position: absolute;
  top: 25%;
  left: 18%;

  &>p{
    font-size: 17px;
    color: #354B6F;
  }

  &>h1{
    font-size: 45px;
    font-weight: lighter;
    color: #EC954F;
    margin-top: -10px;
  }

  &>div{
    float: right;
    background: #354B6F;
    padding: 7px 12px;
    color: #ffffff;
    font-size: 13px;
    text-transform: lowercase;
  }

`;

export const Section = styled.div`
  padding: 50px;
  text-align: center;
`;

export const Wave1 = styled.img`
  width: 100%; 
  transform: rotate(270deg);
  position: absolute; 
  top: 170px; 
  left:200;
  width: 200px;
  z-index:1;
`;

export const Wave2 = styled.img`
  width: 100%;
`;

export const CharacterImg = styled.img`
  width: 200px;
  height: auto;
  margin: 30px;
`;

export const WavePadding = styled.div`
  margin-top: -4px;
  padding: 10px 0 63px 0;
  background: #d3d3d370;
  font-size: 30px;
  text-align: center;
  color: white;
  background: #F2873B;
`;