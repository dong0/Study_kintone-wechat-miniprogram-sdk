Page({
  getRecord: function () {
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
  }
})