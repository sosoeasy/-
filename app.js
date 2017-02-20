//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  detail:function(e){
    console.log("😄");
    // wx.setStorageSync('movieId',e.currentTarget.id);
    wx.navigateTo({
      url: '../detail/detail?id='+e.currentTarget.id,
      success: function(res){
        console.log(res.data);
        // success
      },
      fail: function() {
        // fail
        console.log("失败了");
      },
      complete: function() {
        // complete
        console.log("完成");
      }
    })
  }
})