const ExampleToken = artifacts.require('ExampleToken')

module.exports = deployer => {
  deployer.deploy(ExampleToken)
}
