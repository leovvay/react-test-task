import fetchMock from 'fetch-mock'
import { apiFetch } from '..'



describe('container', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('should make successful request', done => {
    const url = 'http://example.com/test', body = {res: 'test'}
    fetchMock.getOnce(url, {
      body,
    })
    apiFetch({
      url,
      onSuccess: (res) => {
        expect(res).toEqual(body)
        done()
      }
    })
  })

  it('should make erroneous request', done => {
    const url = 'http://example.com/test', body = {res: 'test'}
    fetchMock.getOnce(url, {
      status: 403,
      body,
    })
    apiFetch({
      url,
      onError: (err) => {
        expect(err+'').toBe('Error: {"res":"test"}')
        done()
      }
    })
  })
})
