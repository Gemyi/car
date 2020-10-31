// pages/road_condition/road_condition.js
var plugin = requirePlugin("WechatSI")
let manager = plugin.getRecordRecognitionManager()

Page({
  onShareAppMessage() {
    return {
      title: 'road_condition',
      path: 'pages/road_condition/road_condition'
    }
  },
  
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  chooseAddress(){
    let key = 'JVCBZ-XBXK6-B2USH-EDX5Y-NLDDT-6TFJJ';  //使用在腾讯位置服务申请的key
    let referer = '全程赌车';   //调用插件的app的名称
    const location = JSON.stringify({
      latitude: 39.89631551,
      longitude: 116.323459711
    });
    const category = '生活服务,娱乐休闲'; 
    wx.navigateTo({
      url: `plugin://chooseLocation/index?key=${key}&referer=${referer}&location=${location}&category=${category}`
    });
  },
  data: {
    items: [
      {value: 'ct', name: '畅通'},
      {value: 'yd', name: '拥堵', checked: 'true'},
      {value: 'sg', name: '事故'},
      {value: 'sgn', name: '施工'},
      {value: 'gz', name: '管制'},
    ],
    //输入区
    focus: false,
    address:"",
    recordState:false,
    yuyindata: '',
    imgs:[]
  },
  //上传图片
  setImgsFn() {
    wx.chooseImage({
      // 最多可以选择的图片张数 
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths)
        let imgs = this.data.imgs.concat(tempFilePaths)
        this.setData({
          imgs
        })
      }
    })
 },
  touchStart() {
    let _this = this
    _this.setData({
      recordState:true,
    })
    manager.onRecognize = function(res) {
      console.log("重点 current result", res.result)
    }
    manager.onStop = function(res) { 
      console.log("record file path", res.tempFilePath)
      console.log("result", res.result)
      if (res.result) _this.setData({yuyindata: res.result})
    }
    manager.onStart = function(res) {
      console.log("成功开始录音识别", res)
    }
    manager.onError = function(res) {
      console.error("error msg", res.msg)
    }
    manager.start({duration:30000, lang: "zh_CN"})
  },
  touchEnd(){
    manager.stop()
    this.setData({
      recordState:false,
    })
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
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
    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    const chooseLocation = requirePlugin('chooseLocation');
    const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
    console.log(location)
    let address = location ? location.address : ""
    this.setData({
      address
    })
  
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