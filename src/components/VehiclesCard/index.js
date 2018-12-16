import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CONSTANTS from './../../utils/constants';

const Wrapper = styled.div`
  width: 350px;
  margin: 10px;
  color: #838383;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 3px #00000030;
`;

const BasicInfo = styled.div`
  padding: 20px 25px 10px 25px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${CONSTANTS.color.vehicles};
  &>span{
    font-size: 12px;
  }
`;

const InfoBar2 = styled.div`
  background: #f3f3f3;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  &>div{
    font-size: 17px;
    line-height: 15px;
    font-weight: bold;
  }
  &>div>span{
    font-size: 10px;
    font-weight: normal;
  }
`;

const Footer = styled.div`
  padding: 20px;
  background: ${CONSTANTS.color.vehicles};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 10px;
  text-align: center;
  cursor: pointer;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: calc(100% - 40px);
  margin: 0px 20px 15px 20px;
  font-size: 12px;
  & td{
    padding: 5px;
  }

  & span{
    color: #434343;
    font-weight: bold;
  }

`;

class VehiclesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const details = this.props.details;
    // console.log('details::', details);
    return (
      <Wrapper>
        <BasicInfo>
          {details.name}<br />
          {/* <span>MODEL: {details.model}</span><br /> */}
          <span><i className="fa fa-inr" /> {details.cost_in_credits}, {details.vehicle_class}</span>
        </BasicInfo>

        <Table style={{ padding: '0px 20px' }}>
          <tbody>
            <tr>
              {/* <td>climate: <span>{details.climate}</span></td> */}
              <td>cargo capacity: <span>{details.cargo_capacity}</span></td>
              <td>consumables: <span>{details.consumables}</span></td>
            </tr>
            <tr>
              {/* <td>terrain: <span>{details.terrain}</span></td> */}
              <td>length: <span>{details.length}</span></td>
              <td>max speed: <span>{details.max_atmosphering_speed}</span></td>
            </tr>
          </tbody>
        </Table>

        <InfoBar2>
          <div>
            {(details.pilots || []).length}<br /><span>pilots</span>
          </div>
          <div>
            {details.crew}<br /><span>crew</span>
          </div>
          <div>
            {details.passengers}<br /><span>passengers</span>
          </div>
        </InfoBar2>

        <Footer onClick={() => this.props.displayMoreInfo(details.url)}>View More</Footer>

      </Wrapper>
    );
  }
}

VehiclesCard.propTypes = {
  displayMoreInfo: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

export default VehiclesCard;
