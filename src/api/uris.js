import { componyNotice } from './../mock/notice'

function getMockDataFromUrl () {
  return componyNotice
  // return `http://${location.host}/mock`
}

export const config = {
  headers: {'token': JSON.parse(localStorage.getItem('userToken'))},
  requestHeader: {'Content-Type': 'application/json'},
  responseType: 'json'
}

// 接口路径
export default {
  notice: () => `${getMockDataFromUrl()}`,
}
