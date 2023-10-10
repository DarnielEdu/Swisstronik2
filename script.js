// script.js
async function main() {
    const contractAddressMumbai = "0xfa7715b25DAfBC7b45d034Da0B5c97cd003654bc";
    const contractAddressSwisstronik = "0x1EEB4B02c82104d5488B4E29A380cD4a490e8a4b";
  
    const dataMumbai = await getData(contractAddressMumbai);
    const dataSwisstronik = await getData(contractAddressSwisstronik);
  
    console.log("Data on Mumbai:", dataMumbai);
    console.log("Data on Swisstronik:", dataSwisstronik);
  }
  
  async function getData(contractAddress) {
    const data = await ethers.provider.send(
      "eth_getStorageAt",
      [contractAddress, "0x0"] // assuming the variable is stored at slot 0
    );
  
    return ethers.utils.hexStripZeros(data);
  }
  
  main();
  