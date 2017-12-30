pragma solidity ^0.4.4;


contract Notary {

  struct Record {
      uint mineTime;
      uint blockNumber;
  }

  mapping (string => Record) private docHashes;

  function Notary() public {
    // constructor
  }

  function addDocHash (string hash) public {
    Record memory newRecord = Record(now, block.number);
    docHashes[hash] = newRecord;

  }

  function findDocHash (string hash) public constant returns(uint, uint) {
    return (docHashes[hash].mineTime, docHashes[hash].blockNumber);
  }

}
