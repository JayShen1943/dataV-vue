/*
 * @Descripttion: 获取token
 * @Author: JayShen
 * @Date: 2021-02-27 21:38:15
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-27 21:46:50
 */
import Cookies from 'js-cookie'

const TokenKey = 'Auth-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getCode () {
  return Cookies.get('actcode')
}

export function setCode (code) {
  return Cookies.set('actcode', code)
}