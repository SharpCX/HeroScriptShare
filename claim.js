const CONFIG = require("./config");
const Web3 = require("web3");
const Ethers = require('ethers');

class Fight {
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

        const fightabi = require("./abis/fight.js");
        this.fightContract = this.getContract("0xde9fFb228C1789FEf3F08014498F2b16c57db855", fightabi, wallet);
    }


    async claim() {
        let cresult = await this.fightContract.claimRewards({gasLimit: 5e5})
        let ret = await cresult.wait()
    }


    async start() {
        let counter = 0
        while (true) {
            try {
                console.log('start check account:', Object.keys(this.wallets)[0].red, '\n');
                try {
                    let gasresult = await this.fightContract.estimateGas.claimRewards()
                } catch (e) {
                    console.log("提款失败".red, counter++)
                    // console.error(e)
                    continue
                }
                console.log("开始提币".green, counter++)
                console.log("开始提币".green, counter++)
                console.log("开始提币".green, counter++)
                console.log("开始提币".green, counter++)
                console.log("开始提币".green, counter++)
                console.log("开始提币".green, counter++)
                await this.claim()
                await this.delay(1 * 1000)
            } catch (e) {
                console.log(e);
            }
        }
    }


    getContract(contract, abi, signer) {
        return new Ethers.Contract(contract, abi, signer);
    }

    delay = ms => new Promise(resolve => setTimeout(resolve, ms))


}

async function test() {
    let crawler = new Fight();
    await crawler.start();
}

test();
