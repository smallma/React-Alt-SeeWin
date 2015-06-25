import Alt from '../alt';


class WorkingItemsAction {
  fetchWorkingItems() {
    this.dispatch();
  }

  updateWorkingItems(workingItems) {
    this.dispatch(workingItems);
  }

  workingItemsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

export default Alt.createActions(WorkingItemsAction);
