import Web3 from 'web3';

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_patientID",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_reportType",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_date",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_reportData",
        "type": "string"
      }
    ],
    "name": "addReport",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getReportsCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getReport",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = '0x0b568ae75cccd62eef92a6d6f73b48ee94c390d7'; // Replace with your deployed contract address

const contract = new web3.eth.Contract(abi, contractAddress);

export const addReportToBlockchain = async (report) => {
  const accounts = await web3.eth.getAccounts();
  return await contract.methods.addReport(report.patientID, report.reportType, report.date, report.reportData).send({ from: accounts[0] });
};

export const getReportsFromBlockchain = async () => {
  const reportsCount = await contract.methods.getReportsCount().call();
  const reports = [];
  for (let i = 0; i < reportsCount; i++) {
    const report = await contract.methods.getReport(i).call();
    reports.push({
      patientID: report[0],
      reportType: report[1],
      date: report[2],
      reportData: report[3]
    });
  }
  return reports;
};

export const testConnection = async () => {
  try {
    const networkId = await web3.eth.net.getId();
    console.log('Connected to network:', networkId);
  } catch (error) {
    console.error('Could not connect to Ethereum node:', error);
  }
};
