import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

export default class Table extends React.Component {
  render() {
    return (
        <BootstrapTable data={this.props.tableData}>
          <TableHeaderColumn isKey dataField='id'> Id </TableHeaderColumn>
          <TableHeaderColumn dataField='average'> Avg. Temperature </TableHeaderColumn>
          <TableHeaderColumn dataField='median'> Median Temperature</TableHeaderColumn>
          <TableHeaderColumn dataField='mode'> Mode Temperature</TableHeaderColumn>
        </BootstrapTable>
    );
  }
}
