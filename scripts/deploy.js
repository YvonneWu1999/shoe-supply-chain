const Asset = artifacts.require('./Asset.sol')

module.exports = async function (callback) {
  try {
    console.log(Asset.abi, Asset.bytecode)
    const assetContract = new web3.eth.Contract(Asset.abi)
    assetContract.deploy({
      data: Asset.bytecode,
      arguments: ['My Product']
    })
      .send({
        from: '0x9A8a71a79F946E11dD828A8B0D29fd1BDd07a66D'
      }).on('receipt', (receipt) => {
        console.log(receipt.contractAddress) // contains the new contract address
      })
  }
  catch (error) {
    console.log(error)
  }

  callback()
}