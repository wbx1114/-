// 下载axios包 yarn add axios
import axios from 'axios'
// const request =axios .create()克隆axios
const request = axios.create({
  timeout: 5000,
  baseURL: 'http://toutiao.itheima.net'
})
export default request
