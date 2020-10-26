import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import {Bar, Line, Pie} from 'react-chartjs-2'
import { FontDownload } from '@material-ui/icons';


class DataGraphItem extends Component {

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default connect(mapStoreToProps)(DataGraphItem);

