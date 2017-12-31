const Web3 = require('web3');
const jsSHA = require("jssha");
const fs = require("fs");

let web3 = undefined;
let contract = undefined;
let address = undefined;
let abi = undefined;

function init () {
  //set up network
  let provider = new Web3.providers.HttpProvider("http://localhost:7545");
  web3 = new Web3(provider);

  //obtain contract abi
  let notaryDef = require("../build/contracts/Notary.json");
  abi = notaryDef.abi;

  //asign contract address
  address = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";

  //init contract
  contract = new web3.eth.Contract(abi, address);

};

//get a SHA-256 hash from a file --> works synchronously
function calculateHash (fileName) {
  let fileContent = fs.readFileSync(fileName);
  return calculateHashBytes(fileContent);

};

//get a SHA-256 hash from a data Buffer --> works synchronously
function calculateHashBytes (data) {
  let  shaObj = new jsSHA("SHA-256", "ARRAYBUFFER");
  shaObj.update(data);
  let hash = "0x" + shaObj.getHash("HEX");
  return hash;
};

//sends a hash to the blockchain
function sendHash (hash, callback) {
    web3.eth.getAccounts(function (error, accounts) {
      contract.methods.addDocHash(hash).send({
        from: accounts[0]
      },function(error, tx) {
        if (error) callback(error, null);
        else callback(null, tx);
      });
    });
};

//looks up a hash on the blockchain
function findHash (hash, callback) {

  contract.methods.findDocHash(hash).call( function (error, result) {
    if (error) callback(error, null);
    else {
      let resultObj = {
        mineTime:  new Date(result[0] * 1000),
        blockNumber: result[1]
      }
      callback(null, resultObj);
    }
  });


};

let NotaryExports = {
  findHash : findHash,
  sendHash : sendHash,
  calculateHash : calculateHash,
  init : init,
  calculateHashBytes : calculateHashBytes,
};

module.exports = NotaryExports;
