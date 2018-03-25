import React from 'react';
import dataApi from 'src/dataApi';
import Table from 'src/components/table';
import { calculateTemparature } from 'src/util/calc-temperature';

export default class Temperature extends React.Component {
  state = {
    temperatureData: [],
  };

  constructor(props) {
    super(props);

    dataApi
      .get('/temperatures')
      .then(response => this.setState({ temperatureData: calculateTemparature(response.data.temperatureData) }));
  }

  render() {
    const { temperatureData } = this.state;
    return (
      <div>
        <h1> SafetyCulture Temperature Data</h1>
        <Table tableData={temperatureData} />
      </div>
    );
  }
}
