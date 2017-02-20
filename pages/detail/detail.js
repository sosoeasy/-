Page({
  data:{
    // String1
    imgUrls: [
         'http://img7.doubanio.com/img/celebrity/small/1358747052.41.jpg' ,
          'http://img7.doubanio.com/img/celebrity/small/1358747052.41.jpg' ,
           'http://img7.doubanio.com/img/celebrity/small/1358747052.41.jpg' 
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
    // this.loadData();
    console.log(options);
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
  loadData:function(){
    //  var movieId= wx.getStorageSync('movieID');
      wx.request({
      url: 'http://api.douban.com/v2/movie/in_theaters'+movieId, //仅为示例，并非真实的接口地址
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
  }
})