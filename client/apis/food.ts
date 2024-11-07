import request from 'superagent'

const rootUrl = '/api/v1'

export function getFood(): Promise<string[]> {
  return request.get(rootUrl + '/food').then((res) => {
    return res.body.Cuisine
  })
}
