import { MockMethod } from 'vite-plugin-mock'
import { mock, Random } from 'mockjs'

const dataX = mock({
  // 属性 list 的值是一个数组，其中含有 1 到 100 个元素
  'list|1-10': [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': () => Random.cname()
    }
  ]
})

export default [
  {
    url: '/draft',
    method: 'post',
    timeout: 0,
    response: {
      code: 0,
      data: "sdsds",
    },
  },
  {
    url: '/xxx',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''

      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve('xx'))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(` ${reqbody}`)
    }
  }
] as MockMethod[]
