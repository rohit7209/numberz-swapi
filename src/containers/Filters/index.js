import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from './../../components/Slider';
import ColorOptions from './../../components/ColorOptions';
import GenderOptions from './../../components/GenderOptions';

import { updateFilter } from './actions';

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = (key, value) => this.props.updateFilter({ [key]: value });

  render() {
    return (
      <div>
        {Object.keys(this.props.filterMap).map(key => {
          const filter = this.props.filterMap[key];
          const text = key.split('_').join(' ');
          if (filter.type === 'NUMBER') return <Slider
            defaultValue={this.props.filters[key]}
            key={key}
            text={text}
            onChange={(e) => this.onChange(key, e)}
            min={filter.min}
            max={filter.max}
          />
          else if (filter.type === 'COLOR') return <ColorOptions
            defaultValue={this.props.filters[key]}
            key={key}
            onChange={(e) => this.onChange(key, e)}
            text={text}
            list={filter.list}
          />
          else if (filter.type === 'GENDER') return <GenderOptions
            defaultValue={this.props.filters[key]}
            key={key}
            onChange={(e) => this.onChange(key, e)}
            text={text}
            list={filter.list}
          />
          // else return <p>{JSON.stringify(filter)}</p>
        })}
      </div>
    );
  }
}

Filters.propTypes = {
  filterMap: PropTypes.object.isRequired,
  filters: PropTypes.object.isRequired,
  updateFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.FilterReducer,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (payload) => dispatch(updateFilter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);

