const config = require('../config.js')

function getHeader(appendHeader) {
  const headers = {}

  if (appendHeader) {
    for (const key in appendHeader) {
      headers[key] = appendHeader[key]
    }
  }

  // const securityToken = getSecurityToken()
  // if (securityToken) {
  //   headers['Authorization'] = securityToken
  // }
  headers['Authorization'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmdUeXBlIjoiQUdFTkNZIiwicmVhbE5hbWUiOiIlRTYlQjUlOEIlRTglQUYlOTUiLCJncm91cElkIjoyNTIxLCJtb2JpbGUiOiIxNTA2MTExMDIzMCIsImFnZW5jeUlkIjoyNTIxLCJ1c2VySWQiOjQyODcsImlhdCI6MTU1OTY5OTUyNiwiYXV0aG9yaXRpZXMiOlsiMTAxIiwiMTEwIiwiMTAxIiwiMTEwIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIxNyIsIjE4IiwiMTAzIiwiMTA2IiwiMTA3IiwiMTA4IiwiMTA5IiwiMTkiLCIyMCIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCI0MyIsIjQ0IiwiOTkiLCIxMDAiLCIxMDIiLCIxMDQiLCIxMTAiLCIxMDEiLCIxMyIsIjE3IiwiMTA1IiwiMTAxIiwiMTAxIiwiMTEwIiwiMTAxIl0sInVzZXJuYW1lIjoicG9fMTUxMjMwOTYwMV8yNTIxIn0.FB37GlTQtlXiraqzJygNvfXVI_om_HlMW2VD93zq5KU'

  return headers
}

module.exports = class RestApi {
  static get(path, data, appendHeader){
    return new Promise((resolve, reject) => {
      wx.request({
        url: config.baseUrl + path,
        method: 'GET',
        data: data,
        header: getHeader(appendHeader),
        success: function(res) {
          resolve(res.data)
        },
        error: function(e){
          reject(e)
        }
      })
    })
  }
}
