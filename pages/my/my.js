// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    avatar: ''
},
  /**
    avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32S2VU2jysA/132"
    city: "Nanjing"
    country: "China"
    gender: 1
    language: "zh_CN"
    nickName: "康哥🐝"
    province: "Jiangsu"
   */
  getUserinfoFn(e) {
    // 获取用户信息
   let {avatarUrl='', nickName=''} = e.detail.userInfo
   console.log(avatarUrl, nickName)
   // 更改状态 
   this.setData({
     nickname: nickName,
     avatar: avatarUrl
   })
   
   // 请求后端接口，让后端保存起来
   // 目的：这样在其它地方也可以看到这个头像  
   // 后端：比如订单后端会通过关联查询找到订单和用户昵称头像等一起返回给你
   // 咱们：这边没有结构 跳过
   // ...
   // 注意：得从微信存户里面获取openid  这样知道该谁的
},

  scan(){
    wx.scanCode({
      success (res) {
        console.log(res)
      }
    })
  },
  about(){
    wx.navigateTo({
      url: "/pages/about/about"
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('你转发了')
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target)
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123'
      }
    }
})