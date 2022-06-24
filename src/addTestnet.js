
const addBNB = () => {

window.ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [{
    chainId: '0x61',
    chainName: 'Binance Smart Chain Testnet',
    nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com/']
    }]
    })
    .catch((error) => {
    console.log(error)
    }) 

}

export default addBNB;



   
     