// page/feedback/feedback.js
Page({
  data: {},
  copyLink: function () {
    wx.setClipboardData({
      data: "https://github.com/thinkmap/TOTP-Tools/issues",
      success: function (res) {
        wx.showToast({
          "title": "复制成功！",
          "icon": "success"
        })
      }
    })
  },
  copyWechat: function () {
    wx.setClipboardData({
      data: "huanchengbai",
      success: function (res) {
        wx.showToast({
          "title": "复制成功！",
          "icon": "success"
        })
      }
    })
  }
})