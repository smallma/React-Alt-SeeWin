import React from 'react';


export default React.createClass({
  render() {
    return (
    	<div>
    		{this.props.name}
    		{this.props.description}
    	</div>
    );
  }
});
