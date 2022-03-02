//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
const SYS_URL = '/sys/v1'
module.exports = {
  LOGIN: `${BASE_URL}${SYS_URL}/user/pwd_login`,
  CAPTCHA: `${BASE_URL}${SYS_URL}/base/captcha`,
  ROUTES: `${BASE_URL}/routes`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`,
}
