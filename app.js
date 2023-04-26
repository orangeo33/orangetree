const contractInfo = require("./BusSafe.json");


const abi = contractInfo.abi;
const address = contractInfo.address;

const Web3 = require("web3");
const mysql = require('mysql2');

const web3 = new Web3("http://127.0.0.1:7545");

const smartContract = new web3.eth.Contract(abi,address);


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "orange",
    database: "bussafe"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  var sql = 'select * from checkres'
con.query(sql, function(err, rows, fields)
  {
      if (err) {
          console.error('error connecting: ' + err.stack);
      }

      for (let i=0;i<rows.length;i++) {
        console.log(rows[i].returnValues);
      }
    })


  con.end()



const addCheck = async (carId, checkRes, checkEtc, checkTime)=> {
    const accounts = await web3.eth.getAccounts();
    smartContract.methods.AddCheckList(carId, checkRes, checkEtc, checkTime).send({
        from:accounts[0],
        gas:200000
    }).then(result => console.log(result))
}

// addCheck("2","ok","nothing",30)

const getCount = async () => {
    const count = await smartContract.methods.TotalCount().call();
    console.log(count);
}

// getCount();

const getCheck = async (id) => {
    const result = await smartContract.methods.GetCheck(id).call();
    console.log(result);
}

// getCheck(1)

// smartContract.getPastEvents('AddCheck', {
//     filter: {check_time: [20,30]}, // Using an array means OR: e.g. 20 or 23
//     fromBlock: 0,
    // toBlock: 'latest'
// }, function(error, events){ console.log("preeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",events); });