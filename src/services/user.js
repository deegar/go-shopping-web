import {CAPTCHA, LOGIN, ROUTES} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(loginName, password, captcha, captchaId) {
  return request(LOGIN, METHOD.POST, {
    login_name: loginName,
    password: password,
    captcha: captcha,
    captcha_id: captchaId
  })
}

/**
 * 获取验证码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function getCaptcha() {
  return request(CAPTCHA, METHOD.GET)
}


export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  localStorage.removeItem(process.env.VUE_APP_PERMISSIONS_KEY)
  localStorage.removeItem(process.env.VUE_APP_ROLES_KEY)
  removeAuthorization()
}
export default {
  login,
  logout,
  getRoutesConfig
}
