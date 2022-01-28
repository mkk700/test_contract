# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

### How compile
```
truffle compile
```
### How to migrate 
```
truffle migrate --network rinkeby
```
### How to verify contract
``` 
npx hardhat verify --network mumbai 0xFFf6b833D38A689Ce705867b48f914a26750e6A1 "HachikoTest" "HT" "https://us-central1-hachiko-client-e7905.cloudfunctions.net/app/token/"
```