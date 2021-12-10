const CONFIG = require("./config");
const Web3 = require("web3");
const Ethers = require('ethers');

class Crawler {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider(CONFIG.bsc.host));
        this.wallets = {};
        this.initContracts();
    }

    async initContracts() {
        let privateKey = CONFIG.privateKeys[0];
        const provider = new Ethers.providers.Web3Provider(new Web3.providers.HttpProvider(CONFIG.bsc.host));
        let wallet = new Ethers.Wallet(privateKey, provider);
        let address = wallet.address.toString();
        this.wallets[address] = {privateKey, wallet};

        const marketAbi = require("./abis/market.js");
        this.marketContract = this.getContract("0x5CFFca0321b83dc873Bd2439aE7fEA10aE163fac", marketAbi, wallet);
    }


    async start() {
        // while (true) {
        let curAddress = Object.keys(this.wallets)[0];
        await this.iterOneAccount(curAddress);
        await this.delay(1000)
        console.log("取消一次完成，去看看成功没")
        // }
    }


    async iterOneAccount(curAddress) {
        let heroes = await this.marketContract.getAllTokenIds();
        let chunk = 100
        let allhCount = heroes.length;
        for (let i = 0, j = allhCount; i < j; i += chunk) {
            let temporary = heroes.slice(i, i + chunk);
            let nftData = await this.marketContract.getCharacterDataByIds(temporary)
            for (let ie = 0; ie < nftData.length; ie++) {
                let eItem = nftData[ie]
                if (eItem && eItem.seller && eItem.seller.toString().toLowerCase() == curAddress.toString().toLowerCase()) {
                    this.printFormat(eItem)
                    let t = await this.marketContract.cancelListing(eItem.nftId.toString())
                    await t.wait()
                    console.log("取消成功")
                }
            }
        }
    }


    printFormat(sourceData) {
        if (!sourceData) {
            return;
        }
        console.log(
            "nftId", sourceData.tokenId.toString().red,
            "heroType", sourceData.heroType.toString().red,
            "name", sourceData.name.toString().red,
            "level", sourceData.level.toString().red,
            "attack", sourceData.attack.toString().red,
            "speed", sourceData.speed.toString().red,
            "hp", sourceData.hp.toString().red,
            "price", this.web3.utils.fromWei(sourceData.price.toString()).red
        )
    }

    getContract(contract, abi, signer) {
        return new Ethers.Contract(contract, abi, signer);
    }

    delay = ms => new Promise(resolve => setTimeout(resolve, ms))
}


async function test() {
    let crawler = new Crawler();
    await crawler.start();
}

test();
