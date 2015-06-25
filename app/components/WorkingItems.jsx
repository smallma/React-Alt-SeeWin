import React from 'react';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


export default React.createClass({
  render() {
    return (
    	<Grid>
	    	{this.props.workingItems.map((item, i) => {
		    	return (
		    	    <Row className="itemSection">
		    	    	<Col xs={10} md={10} xsOffset={1} mdOffset={1}>
		    	    		<div className="itemName">{item.name}</div>
		    	    		<div className="itemDescription">{item.description}</div>
		    	    	</Col>
		    	    </Row>
		    	);
	    	})}
    	</Grid>
    );
  }
});
