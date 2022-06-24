const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("PixellandMap", function () {

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    PixellandMap = await ethers.getContractFactory("PixellandMap");
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens once its transaction has been
    // mined.
    pixellandmap = await PixellandMap.deploy(10,10);
  });

describe("Map Size Works", function() {
  it("Should return the total map size", async function () {
   
    const mapCoords = await pixellandmap.getMapSize();

    expect(mapCoords[0]).to.equal(10);
    expect(mapCoords[1]).to.equal(10);
  });
});

describe("Plot Proposal Works", function() {
  it("Should return proposal", async function () {
   
  await pixellandmap.connect(addr1).proposePlot(0,0,5,5);

   const recentProposal = await pixellandmap.getRecentProposal();
   const plotCoords = await pixellandmap.getProposalByAddress(addr1.address);
   expect(recentProposal[0].toString()).to.equal(plotCoords.toString());
  });

  it("Should approve the proposal and return the new owner of the proposed plot", async function () {
   
     const isOwned1 = await pixellandmap.isOwned([0],[0]);
     const isOwned2 = await pixellandmap.isOwned([5],[5]);
     expect(isOwned1 && isOwned2).to.equal(false);
     await pixellandmap.connect(addr1).proposePlot(0,0,5,5);
     await pixellandmap.connect(owner).approveOrReject(0, addr1.address);
  
     const isOwnedTrue1 = await pixellandmap.isOwned([0],[0]);
     const isOwnedTrue2 = await pixellandmap.isOwned([5],[5]);
     const ownerIsProposer1 = await pixellandmap.ownerOf([0],[0]);
     const ownerIsProposer2 = await pixellandmap.ownerOf([5],[5]);
     expect(isOwnedTrue1 && isOwnedTrue2).to.equal(true);
     expect(ownerIsProposer1 && ownerIsProposer2).to.equal(addr1.address);
    });
    it("Should let multiple people own plots", async function() {
      await pixellandmap.connect(addr1).proposePlot(0,0,5,5);
      await pixellandmap.connect(owner).approveOrReject(0, addr1.address);
      await pixellandmap.connect(addr2).proposePlot(6,6,7,7);
      await pixellandmap.connect(owner).approveOrReject(0, addr2.address);
      const ownerIsProposer1 = await pixellandmap.ownerOf([0],[0]);
      const ownerIsProposer2 = await pixellandmap.ownerOf([5],[5]);
      const ownerIsProposer3 = await pixellandmap.ownerOf([6],[6]);
      const ownerIsProposer4 = await pixellandmap.ownerOf([7],[7]);
      expect(ownerIsProposer1 && ownerIsProposer2).to.equal(addr1.address);
      expect(ownerIsProposer3 && ownerIsProposer4).to.equal(addr2.address);
    });
    describe("Map Expansion Works", function() {
      it("Should return the new map size and let someone own a plot there", async function () {
  
        const mapCoordsBefore = await pixellandmap.getMapSize();
        expect(mapCoordsBefore[0]).to.equal(10);
        expect(mapCoordsBefore[1]).to.equal(10);
  
        await pixellandmap.connect(addr1).proposePlot(0,0,5,5);
        await pixellandmap.connect(owner).approveOrReject(0, addr1.address);
        await pixellandmap.connect(addr2).proposePlot(6,6,7,7);
        await pixellandmap.connect(owner).approveOrReject(0, addr2.address);
        await pixellandmap.proposeMapExpansion(20,20);
        await pixellandmap.connect(addr1).vote(0);
        await pixellandmap.connect(addr2).vote(0);
        await pixellandmap.connect(owner).finalizeMapVote();
    
        const mapCoordsAfter = await pixellandmap.getMapSize();
        expect(mapCoordsAfter[0]).to.equal(20);
        expect(mapCoordsAfter[1]).to.equal(20);

        const isOwned1 = await pixellandmap.isOwned([15],[0]);
        const isOwned2 = await pixellandmap.isOwned([20],[20]);
        expect(isOwned1 && isOwned2).to.equal(false);
        await pixellandmap.connect(addr3).proposePlot(15,0,20,20);
        await pixellandmap.connect(owner).approveOrReject(0, addr3.address);
        const isOwned3 = await pixellandmap.isOwned([15],[0]);
        const isOwned4 = await pixellandmap.isOwned([20],[20]);
        expect(isOwned3 && isOwned4).to.equal(true);
      });
    });

 // it("Should not let someone propose an owned plot", async function() {
  //  await pixellandmap.connect(addr1).proposePlot(0,0,5,5);
  //  await pixellandmap.connect(owner).approveOrReject(0, addr1.address);
  //  expect(await pixellandmap.connect(addr2).proposePlot(0,0,5,5)).to.be.revertedWith("Plots are owned.");
  //});
  //it("Should not let someone propose a plot out of bounds", async function() {
  //  expect(await pixellandmap.connect(addr1).proposePlot(20,20,50,50)).to.be.reverted();
  //});

});
 
});


