
const { ethers } = require("hardhat");



async function main() {
    // Get deployer address
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with account:", deployer.address); 

    const amount = ethers.parseEther("1000000"); 
    

    
    
    // Get deployer balance before deployment
    const balanceBigNumber = await deployer.provider.getBalance(deployer.address);
    const balance = ethers.formatEther(balanceBigNumber);
    console.log("Account deployer balance: ", balance);
    
    // Deploy contract
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy("Kalchaqui", "KL", amount);
    
    // Wait for contract to be deployed
    await token.waitForDeployment();
    
    // Get total supply
    const totalSupply = await token.totalSupply()

    // Print contract address and total supply
    console.log(
        `Token deployed to ${token.target} with an initialSupply ${ethers.formatEther(totalSupply)}`
    );

    // Get deployer balance after deployment
    const balanceBigNumberAfter = await deployer.provider.getBalance(deployer.address);
    const balanceAfter = ethers.formatEther(balanceBigNumberAfter);
    console.log("Account deployer balance after deploy: ", balanceAfter);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });