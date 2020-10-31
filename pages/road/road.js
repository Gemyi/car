// pages/road/road.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  show(){
    wx.navigateTo({
      url: "pages/roadinfo/roadinfo"
    });
  },
  /**
   * 预览真实的图片
   */
  showPreviewImg() {
    // 明确：咱们后期写小程序上传图片肯定请求接口
    // 你请求完接口后端给你返回的就是HTTP连接
    // 包括：你在列表页显示数据也是HTTP接口
    // 咱们：1使用mock数据，2使用七牛云对象存储 绑定 网址  CDN

    // 对象存储：是一个技术名词解释不清
    // 作用：存储网站的资源
    // 好处：静态资源和咱们代码分离  加快访问速度、减轻服务器压力 （并发
    // 实战流程：
    // 1. 后端去阿里云、腾讯云、七牛云等申请对象存储 （服务器供应商会给接口
    // 2. 后端根据服务器供应商的文档写上传接口
    // 3. 你根据后端的接口 上传图片  它给你返回一个七牛云地址
    wx.previewImage({
      current: 'http://tmp00001.zhaodashen.cn/4.png', // 当前显示图片的http链接
      urls: ['http://tmp00001.zhaodashen.cn/4.png'] // 需要预览的图片http链接列表
    })
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
  onShareAppMessage: function () {

  }
})