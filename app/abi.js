[
  {
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "constant": false,
    "name": "addDocHash",
    "outputs": []
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "hash",
        "type": "bytes32"
      }
    ],
    "name": "findDocHash",
    "outputs": [
      {
        "name": "",
        "type": "uint256",
        "components": [
          {
            "name": "mineTime",
            "type": "uint256"
          },
          {
            "name": "blockNumber",
            "type": "uint256"
          }
        ]
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "constant": true,
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ]
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  }
];
