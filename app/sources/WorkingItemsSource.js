import WorkingItemsAction from '../actions/WorkingItemsAction';


var mockData = [
  { name: "機電保養", description: "檢查項目：各式配電盤, 各電動機及幫浦, 變壓器, 功率因數調整盤, 契約容量, 管路及排水, 燈具及供電, 耗材庫存"},
  { name: "發電機檢查", description: "檢查項目：柴油發電機, 電瓶及充電機, ATS電源自動切換系統, 線路檢查"},
  { name: "消防檢測", description: "檢查項目：複合式火警受信總機, 消防泵、撒水泵、泡沫泵、採水泵, 撒水、水霧、泡沫系統, 消防栓（箱）系統, 滅火器, 避難指標燈, 緊急停電照明燈, 緊急廣播系統, 排煙系統, 連節送水管, 避難器具"},
  { name: "監控系統", description: "維修項目：監控主機、攝影機, 讀卡機及感應扣, 公共及住戶對講機系統, 共同天線, 車道感應器檢測"},
  { name: "蓄水池及水塔清洗", description: "代辦項目：水塔及蓄水池 汙水取樣、申報、清洗、抽取"},
  { name: "年度消防檢修申報", description: "代辦項目：年度消防檢修簽證申報"}
];

var WorkingItemsSource = {
  fetchWorkingItems() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {
            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: WorkingItemsAction.updateWorkingItems,
      error: WorkingItemsAction.workingItemsFailed,
      loading: WorkingItemsAction.fetchWorkingItems
    }
  }
};

export default WorkingItemsSource;
