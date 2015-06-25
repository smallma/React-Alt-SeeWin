import Alt from '../alt';

import WorkingItemsAction from '../actions/WorkingItemsAction';
import WorkingItemsSource from '../sources/WorkingItemsSource';


class WorkingItemsStore {
  constructor() {
    this.workingItems = [];
    this.errorMessage = '';

    this.bindListeners({
      handleUpdateWorkingItems: WorkingItemsAction.UPDATE_WORKING_ITEMS,
      handleWorkingItemsFailed: WorkingItemsAction.WORKING_ITEMS_FAILED,
      handleFetchWorkingItems: WorkingItemsAction.FETCH_WORKING_ITEMS
    });

    this.exportAsync(WorkingItemsSource);
  }

  handleUpdateWorkingItems(items) {
    this.workingItems = items;
    this.errorMessage = null;
  }

  handleFetchWorkingItems() {
    console.log('handleFetchWorkingItems');
    this.workingItems = [];
  }

  handleWorkingItemsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default Alt.createStore(WorkingItemsStore, 'WorkingItemsStore');
