import { hello } from '../hello'

describe('hello', () => {
    it('should return hello', () => {
        expect(hello()).toEqual('島村卯月、頑張ります！！！')
    })
})
