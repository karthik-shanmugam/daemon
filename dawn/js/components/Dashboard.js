import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PeripheralList from './PeripheralList';
import FinalCompPeripheralList from './FinalCompPeripheralList';
import Peripheral from './Peripheral';
import Gamepads from './Gamepads';
import RobotActions from '../actions/RobotActions';
import Editor from './Editor';

export default React.createClass({
  displayName: 'Dashboard',
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col smPush={8} sm={4}>
            <FinalCompPeripheralList {...this.props} />
            <Gamepads {...this.props} />
          </Col>
          <Col smPull={4} sm={8}>
            <Editor {...this.props} />
          </Col>
        </Row>
      </Grid>
    );
  }
});
