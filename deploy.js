// deploy.js
async function main() {
    const SimpleContract = await ethers.getContractFactory("SimpleContract");
    const simpleContract = await SimpleContract.deploy();
  
    await simpleContract.deployed();
  
    console.log("Contract deployed to address:", simpleContract.address);
  }
  
  main();
  