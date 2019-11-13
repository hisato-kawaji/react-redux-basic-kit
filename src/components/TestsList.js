import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class TestsList extends Component {

  componentDidMount = () => {
    this.props.testActions.loadList();
  }

  handleRedirect = () => {
    window.location.href = '/tests/create';
  }

  render() {
    const testsList = this.props.test.listData;
    let tests = null;
    if (testsList) {
      tests = Object.keys(testsList).map((key) => {
        let testUrl = "/tests/detail?id=" + testsList[key].id ;
        return (
          <TableRow key={key}>
            <TableRowColumn>{testsList[key].id}</TableRowColumn>
            <TableRowColumn>{testsList[key].company}</TableRowColumn>
            <TableRowColumn>{testsList[key].name}</TableRowColumn>
            <TableRowColumn>{testsList[key].registered_at}</TableRowColumn>
            <TableRowColumn>{testsList[key].created_at}</TableRowColumn>
            <TableRowColumn><RaisedButton href={testUrl} label="Detail" style={{margin: 12}} /></TableRowColumn>
          </TableRow>
        );
      });
    } else {
      tests = (
        <CircularProgress size={200} thickness={15} />
      );
    }

    return (
      <div>
        <RaisedButton type="button" label="追加" primary={true} style={{margin: 18}} onClick={
          () => { this.handleRedirect();}}/>
        <Table selectable={false} style={{position: 'relative', margin: 'auto', textAlign: 'center'}}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{
            margin: 'auto', textAlign: 'center'
            }}>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn> </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} style={{
            margin: 'auto', textAlign: 'center'
            }}>
            { tests ?
            tests
             : (
              <CircularProgress size={200} thickness={15} />
            )}
          </TableBody>
        </Table>
      </div>
    );
  }
}

TestsList.propTypes = {
  test: PropTypes.object.isRequired,
  testActions: PropTypes.object.isRequired,
};

