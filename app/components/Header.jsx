import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


export default React.createClass({
  render() {
    return (
      <Grid>
        <Row>
          <Navbar brand='旭源工程行'  className='navbar-inverse navbar-fixed-top'>
            <Nav right>
              <Button bsSize='xsmall'>聯絡我們</Button>
            </Nav>
          </Navbar>
        </Row>
        <Row>
          <Col xs={10} md={6} xsOffset={1} mdOffset={3} className="text-center"><p>還在煩惱機電保養問題嗎？</p></Col>
          <Col xs={10} md={6} xsOffset={1} mdOffset={3} className="text-center"><p>消防設備是否也年久失修了呢？</p></Col>
          <Col xs={10} md={6} xsOffset={1} mdOffset={3} className="highlight text-center"><p>通通讓旭源來幫您解決吧！</p></Col>
        </Row>
      </Grid>
    );
  }
});
