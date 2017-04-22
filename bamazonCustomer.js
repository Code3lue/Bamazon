var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '8aller$tatuS',
    database: 'Bamazon'
});

connection.connect(function(err){
    if (err) throw err;
    console.log('Welcome! You are connected as id ' + connection.threadId);
    console.log("Heres what we have on sale")
});

var questions = [{
    name: 'chooseID',
    type: 'input',
    message: 'Choose an item to buy by ID',
    validate: function (value) {
        if (isNaN(value)== false){
              if (value > 10 || value < 0) {
      console.log('\nSorry you must input valid ID number')
       return false
  }
  else {
     
      return true
      
  }

        }
        else {
            return false;

        }
    }
},
{
    name: 'quantity',
    type: 'input',
    message: "How many will you be buying?",
    validate: function (value) {
        if (isNaN(value) == false){
       
            return true;
            
        }
        else {
            return false;
        }

        }

}];

/*function checkItem() {
    
    console.log(id)
    console.log(quantity)
    
    connection.query('select * products', function (err, data) {
        if (err) throw err;
        for (var i = 0; i < data.length; i++) {

        }

    })
}*/


function getItems() {
        
    connection.query('select * from products', function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
        console.log('\n----------------------------------\n')
        for (var key in data[i]) {
                console.log(key.toUpperCase() + " " + data[i][key]);             
    }
}
      
inquirer.prompt(questions).then(function(answer) {
    console.log(answer)
   
});
});

}
getItems();


