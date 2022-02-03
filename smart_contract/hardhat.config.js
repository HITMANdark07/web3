require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/FmoZYeLgYorz83hrBAihnYfEvX-7Jb1U',
      accounts: ['365f56e8de7ed85b63c00715e587e5e5db50cd8175de95e56ca159c6f6a35775']
    }
  }
}