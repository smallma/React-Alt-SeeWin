import React from 'react';


export default React.createClass({
  render() {
  	console.log('workingItems!!!');
  	console.log(this.props.workingItems);
    return (
    	<div>
	    	{this.props.workingItems.map((item, i) => {
	    	  return (
	    	    <div className="itemSection">
	    	      <div className="itemName">{item.name}</div>
	    	      <div className="itemDescription">{item.description}</div>
	    	    </div>
	    	  );
	    	})}
    	</div>
    );
  }
});


