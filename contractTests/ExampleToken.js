const ExampleToken = artifacts.require('ExampleToken')

describe('when deploying ExampleToken', () => {
  contract('ExampleToken', () => {
    let ext

    before('setup contract', async () => {
      ext = await ExampleToken.new()
    })

    it('should have correct name', async () => {
      const name = await ext.name()

      assert.equal(
        name,
        'ExampleToken',
        'name should be ExampleToken'
      )
    })

    it('should have correct symbol', async () => {
      const symbol = await ext.symbol()

      assert.equal(
        symbol,
        'EXT',
        'symbol should be EXT'
      )
    })

    it('should have correct decimals', async () => {
      const decimals = await ext.decimals()

      assert.equal(
        decimals.toString(),
        '18',
        'decimals should be 18'
      )
    })
  })
})