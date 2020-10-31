function isLogin() {
  // 以前：用H5存储
  // 现在：用小程序存储

  // 获取小程序存储里面的数据
  wx.getStorage({
    key: 'openid',  // 获取OPID  
    success: res => {
      console.log('已登录', res)
    },
    fail: (err) => {
       login()
    }
})
}

// 登录
function login() 
{
// 通过wx.login获取code
wx.login({
  success(res) {
    if (res.code) {
      // 通过code获取openid
      wx.request({
        url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx70590c6d5f0698ee&secret=f61b22d0f6564d4b5dca6f243ebe51ce&js_code=${res.code}&grant_type=authorization_code`,
        success: res=> {   
            if (res.data.openid) {
               // 登录成功
               console.log('登录成功', res.data.openid)
               // 1. 存储用户信息
              wx.setStorageSync('openid', res.data.openid)
               // 2. 请求后端接口  让它们在用户表中记录
            } else {   
              // 登录失败
              console.log('登录失败，重新登录')
              login()
            }
        },
        error: err => {
          console.log(err)
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
}

module.exports = {
  // isLogin: isLogin
  isLogin
}