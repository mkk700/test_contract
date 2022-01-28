const HachikoTest = artifacts.require("HachikoTest");

module.exports = async function (deployer) {
  const name = "HachikoTest";
  const symbol = "HT";
  const baseTokenURI =
    "https://us-central1-hachiko-client-e7905.cloudfunctions.net/app/token/";
  await deployer.deploy(HachikoTest, name, symbol, baseTokenURI);
};
