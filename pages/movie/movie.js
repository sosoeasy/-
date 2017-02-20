Page({
  data:{
   imgUrls: [
            //       'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
         '/pages/assets/img/001.jpg' ,
          '/pages/assets/img/002.jpg' ,
           '/pages/assets/img/003.jpg' 
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    movieArrs:[1,2,3,4,5,6,7,8],
    movies:[],
    hidden:true
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
    // this.loadData();
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    // String3
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    // String4
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    // String5
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    // String6
  },

  loadData:function(){
    var page=this;
          wx.request({
      url: 'http://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      data: {
        x: '' ,
        y: ''
      },
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        page.setData({movies:res.data})
      }
    })

  },
  detail:function(e){
      getApp().detail(e);
  }
})