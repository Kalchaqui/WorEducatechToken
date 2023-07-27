const { ethers } = require("hardhat");

async function main(){

    const TOKEN_ADDRESS = "0x80Dc62D283B3e09Ad159911e046e0184Fb57583f";

    const [owner, otherAccount] = await ethers.getSigners();

    console.log("Deployer - Owner Account:", owner.address);
    console.log("Account to be frozen:", otherAccount.address);

    const amount = hre.ethers.parseEther("1000");

    const MiToken = await ethers.getContractFactory("MyToken");
    const token = await MiToken.attach(TOKEN_ADDRESS);

    let tx = await token.mint(owner.address, amount);
    await tx.wait();

    let balance = await token.balanceOf(owner.address);

    console.log("Balance of owner", ethers.formatEther(balance));

    console.log("sending funds to otherAccount");

    tx = await token.connect(owner).transfer(otherAccount.address, amount);
    await tx.wait();

    let balance2 = await token.balanceOf(otherAccount.address);
    console.log("Balance of otherAccount", ethers.formatEther(balance2));

    console.log("Freezing account. (otherAccount) ", otherAccount.address);

    tx = await token.freeze(otherAccount.address);
    await tx.wait();

    console.log("Trying to use frozen account to transfer tokens ", otherAccount.address);

    try{
        tx = await token.connect(otherAccount).transfer(owner, amount);
        await tx.wait();
        console.log("success sending tokens from ", otherAccount.address);
    }
    catch(error){
        console.log(error);
    }

    console.log("Unfreezing account. ", otherAccount.address);

    tx = await token.unfreeze(otherAccount.address);
    await tx.wait();

    console.log("Trying to use unfrozen account to transfer tokens ", otherAccount.address);

    try{
        tx = await token.connect(otherAccount).transfer(owner, amount);
        await tx.wait();
        console.log("success sending tokens from ", otherAccount.address);
    }
    catch(error){
        console.log(error);
    }

    tx = await token.connect(owner).burn(amount);
    await tx.wait();

    balance = await token.balanceOf(owner.address);
    console.log("Balance of owner after burning", ethers.formatEther(balance));

    balance2 = await token.balanceOf(otherAccount.address);
    console.log("Balance of other account after transfer", ethers.formatEther(balance2));


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });