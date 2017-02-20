Page({
  data:{
      movieArrs:[],
      inputVal:"",
      modalHidden:true
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    // String2
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
  bindKeyInput:function(e){
      this.setData({inputVal:e.detail.value});
      this.setData({movieArrs:[]})//当输入东西的时候列表为空
  },
  search:function(){
      if(this.data.inputVal==""){
        this.setData({modalHidden:false});
        console.log("😄");
        return;
      }
      this.loadData();
      this.setData({isHidden:false});
  },
  loadData:function(){
    var page=this;
    this.setData({movieArrs:[1,2,3,4,5,6,7]});
//           wx.request({
//       url: 'url', //仅为示例，并非真实的接口地址
//       data: {
//         x: '' ,
//         y: ''
//       },
//       header: {
//           'content-type': 'application/json'
//       },
//       success: function(res) {
//         console.log(res.data)
//         page.setData({movies:res.data})
//       }
//   })
  },
  hideModal:function(){
      console.log("知道了");
      this.setData({modalHidden:true});
  },
  detail:function(){
    console.log("😄");
    wx.navigateTo({
      url: '../detail/detail',
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