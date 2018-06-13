/**
 * uums统一认证的专用登录逻辑
 */

// 加密
export function encryptByDES (message, key) {
  var CryptoJS = require('crypto-js')

  var keyHex = CryptoJS.enc.Utf8.parse(key)
  var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

// 登陆成功储存用户名uums
export function saveNameUUMS (inputName) {
  var key = 0
  var name = JSON.parse(window.localStorage.usernameLogin)
  if (name.length === 0) {
    name.push(inputName)
  } else {
    for (var i = 0; i < name.length; i++) {
      if (name[i] === inputName) {
        key = 1
        return false
      }
    }
    if (key === 0) {
      if (name.length === 3) {
        name.pop()
      }
      name.unshift(inputName)
    }
  }
  window.localStorage.usernameLogin = JSON.stringify(name)
}

// 登录成功存储userName
export function saveUserName (name) {
  if (localStorage.getItem('userName')) {
    localStorage.removeItem('userName')
  }
  window.localStorage.userName = JSON.stringify(name)
}

// 登录成功存储token
export function saveToken (token) {
  if (localStorage.getItem('userToken')) {
    localStorage.removeItem('userToken')
  }
  window.localStorage.userToken = JSON.stringify(token)
}

// 注销用户清空localStorage
export function userLogOut () {
  localStorage.removeItem('userName')
  localStorage.removeItem('userToken')
}
