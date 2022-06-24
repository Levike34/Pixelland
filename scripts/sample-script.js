// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const { default: addBNB } = require("../Mango-Finance/client/src/addTestnet");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile'); 0xA1b7Bb4ee9B963a210bDB470e51F0eaECD02E484

  // We get the contract to deploy     uint256 public constant WOOD = 0;
  //  uint256 public constant STONE = 1;
  //  uint256 public constant FOOD = 2;
  //  uint256 public constant HEALTH_POTIONS = 3;
  //  uint256 public constant STAMINA_POTIONS = 4;   resources.safeTransferFrom(owner.address, EricAddr, 0, 100, "");
 // resources.safeTransferFrom(owner.address, EricAddr, 1, 100, "");
  //resources.safeTransferFrom(owner.address, EricAddr, 2, 100, "");
  //resources.safeTransferFrom(owner.address, EricAddr, 3, 100, "");
  //resources.safeTransferFrom(owner.address, EricAddr, 4, 100, "");
 // resources.safeTransferFrom(owner.address, EricAddr, 5, 100, "");
 // resources.safeTransferFrom(owner.address, EricAddr, 7, 100, "");
 // resources.safeTransferFrom(owner.address, EricAddr, 8, 100, "");
  //  uint256 public constant SKELETON_BONES = 5;
 //   uint256 public constant DUAL_POTIONS = 6;
 //   uint256 public constant METAL = 7;
  //  uint256 public constant GEMS = 8;
 //   uint256 public constant DIAMOND_RINGS = 9;
 //   uint256 public constant REPAIR_HAMMER = 10; safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data)
const EricAddr = "0xA1b7Bb4ee9B963a210bDB470e51F0eaECD02E484";
  [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

  const Pixel = await hre.ethers.getContractFactory("Pixel");
  const pixel = await Pixel.deploy();

  await pixel.deployed();

  const Resources = await hre.ethers.getContractFactory("Resources");
  const resources = await Resources.deploy(pixel.address);

  await resources.deployed();
  let pixelBal = await pixel.balanceOf(owner.address);

  console.log("Resources deployed to:", resources.address);
  console.log("Pixel:  " + pixel.address);
  console.log("Pixel Balance:", pixelBal.toString());

  const amountBig = 1000000000;
 
  //pixel.transferFrom(owner.address, resources.address, 1000000000);
  let data = "0x10";
  resources.safeBatchTransferFrom(owner.address, EricAddr, [0, 1 ,2 ,3 ,4 ,5, 7, 8], [100, 100, 100, 100, 100, 100, 100, 100], data);

  console.log("to here bruh");
  let bal = await pixel.balanceOf(resources.address);
  console.log("resource B:  "+bal);

  let pixelBal2 = await pixel.balanceOf(owner.address);
  console.log("Pixel Balance:", pixelBal2.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
