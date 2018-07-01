pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract ExampleToken is StandardToken {
  string public name = "ExampleToken";
  string public symbol = "EXT";
  uint256 public decimals = 18;

  constructor()
    public
  {
    totalSupply_ = 100e18;
    balances[msg.sender] = totalSupply();
  }
}