import React from 'react';
import AltContainer from 'alt/AltContainer';

import WorkingItemsStore from '../stores/WorkingItemsStore';
import WorkingItemsAction from '../actions/WorkingItemsAction';

import Header from './Header.jsx';
import WorkingItems from './WorkingItems.jsx';
import Footer from './Footer.jsx';


export default React.createClass({
  componentDidMount() {
    WorkingItemsStore.fetchWorkingItems();
  },

  render() {
    return (
      <div>
        <Header />

        <AltContainer store={WorkingItemsStore}>
          <WorkingItems />
        </AltContainer>

        <Footer />
      </div>
    );
  }
});
