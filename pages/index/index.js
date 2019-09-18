Page({
  getRecord: function() {
    const apiToken = 'msg2NGjwMmdeK98fCwLRQTcMqJ76WXRYqZhp3hmB';
    const domain = 'devcamp.cybozu.cn';
    const appId = 343;
    const recordId = 1;
    const kintone = require('@kintone/kintone-wechat-miniprogram-sdk');
    const auth = (new kintone.Auth()).setApiToken({
      apiToken
    });
    const connection = new kintone.Connection({
      domain,
      auth
    });
    const kintoneRecord = new kintone.Record({
      connection
    });
    kintoneRecord.getRecord({
      app: appId,
      id: recordId
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err.get());
    });
  },
  getRecord2: function() {
    const apiToken = 'msg2NGjwMmdeK98fCwLRQTcMqJ76WXRYqZhp3hmB';
    const domain = 'devcamp.cybozu.cn';
    const appId = 343;
    const recordId = 1;
    wx.request({
      url: `https://${domain}/k/v1/record.json`,
      data: {
        app: appId,
        id: recordId
      },
      header: {
        'content-type': 'application/html',
        'X-Cybozu-API-Token': apiToken
      },
      method: "GET",
      dataType: 'json',
      responseType: 'text',
      success(res) {
        if (res.statusCode === 200) {
          console.log(res.data);
        } else {
          //kintone error
        }
      },
      fail(e) {
        console.log(e);
      }
    });
  },
})