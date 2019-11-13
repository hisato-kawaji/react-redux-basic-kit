i1mport React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { parse } from 'qs';
import * as Test from '../constants/Test';
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

export default class TestDetail extends Component {

  componentDidMount = () => {
    const query = parse(this.props.location.search.substr(1));
    this.props.testActions.get(query.id);
  }

  render() {
    const testInfo = this.props.test.test;
    let test = null;
    if (testInfo === null) {
      return (
        <div style={{position: 'relative', margin: 'auto', textAlign: 'center'}}>
          <CircularProgress size={200} thickness={15} />
        </div>
      );
    }

    const infoKey = Object.assign(Test.Model, {
      "created_at": "データ追加時間",
      "updated_at": "データ更新時間",
    });
    test = Object.keys(infoKey).map((key) => {
      if (testInfo.hasOwnProperty(key)) {
        return (
          <TableRow key={key}>
            <TableRowColumn>{infoKey[key]}</TableRowColumn>
            <TableRowColumn>{testInfo[key]}</TableRowColumn>
          </TableRow>
        );
      } else {
        return null;
      }
    });

    let updateUrl = "/tests/update?id=" + testInfo["id"];

    return (
      <div>
        <Table selectable={false} style={{position: 'relative', margin: 'auto', textAlign: 'center'}}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={{
            margin: 'auto', textAlign: 'center'
            }}>
            <TableRow>
              <TableHeaderColumn>Key</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} style={{
            margin: 'auto', textAlign: 'center'
            }}>
            {test}
          </TableBody>
        </Table>
        <RaisedButton label="Update" href={updateUrl} primary={true} style={{margin: 12}} />
      </div>
    );
  }
}

TestDetail.propTypes = {
  test: PropTypes.object.isRequired,
  testActions: PropTypes.object.isRequired,
};

