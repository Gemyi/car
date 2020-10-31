// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getUserinfoFn(e) {
    // 能够打印出来了
    // 咱们继续请求接口让后端保存到数据库即可
    console.log(e.detail.userInfo)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success (res) {
        console.log(res)
        if (res.code) {
          let appid = 'wx1e5feec6e6104f5c'
          let apppwd = 'f61b22d0f6564d4b5dca6f243ebe51ce'
          let code = res.code
          //发起网络请求 根据code获取openid
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${apppwd}&js_code=${code}&grant_type=authorization_code`,
            success: res => { 
              console.log(res.data.openid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
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
  onShareAppMessage: function () {

  }
})