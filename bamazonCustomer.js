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
    
});


var questions = [{
    name: 'chooseID',
    type: 'input',
    message: 'Choose an item to buy by ID',
    validate: function (value) {
        if (isNaN(value)== false && value <= 10 && value > 0 && value !== undefined){
            
      
       return true
  }
  else {
      console.log('\nSorry you must input valid ID number')
     
      return false
      
  }

        }
},
{
    name: 'quantity',
    type: 'input',
    message: "How many will you be buying?",
    validate: function (value) {
        if (isNaN(value)== false && value < 10 && value > 0 && value !== undefined) {
       
            return true;
       
        }
        else {
            return false;
        }

        }

}];
function getItems() {
        
    connection.query('select * from products', function (err, data) {
    if (err) throw err;
    for (var i = 0; i < data.length; i++) {
        console.log('\n----------------------------------\n')
        for (var key in data[i]) {
                console.log(key.toUpperCase() + " " + data[i][key]);             
    }
} if (data.slice(-1)[0]) {
    console.log('\n------------------------------------\n')
    console.log("Press SPACE to continue")
};

    });
    start();
}

function start() {
      
inquirer.prompt(questions).then(function(answer) {

   var id = answer.chooseID;
   var quant = answer.quantity;
     //query to find the quantity of the item they selected

connection.query('select item_id, stock_quantity from products', function(err, data) {
    if (err) throw err;
    //console.log(id)
    var string = JSON.stringify(data);
    var obj = JSON.parse(string);
   // console.log(obj)
   var arrayID = (id - 1)
    //console.log(arrayID)
     for (var i = 0; i < obj.length; i++) {
        if (i === arrayID) {
           // console.log(obj[i].stock_quantity);
            //console.log(quant)
            if (quant <= obj[i].stock_quantity && quant > 0) {
                
           
                function purchase() {
                    
                    var subtract = (obj[i].stock_quantity - quant)
                    console.log(subtract)
            

                    connection.query('update products set ? where ?'), [{
                        stock_quantity: subtract}, {
                            item_id: obj[i].stock_quantity
                        }], function(error) {
                            if (error) throw error;
                            console.log("Purchase Successful!");
                        };
                  
                };
                purchase()
            };
            if (obj[i].stock_quantity === 0){
                console.log("Item OUT OF STOCK")
                start();
            };

                console.log('Sorry, please enter valid quantity')
                start();
            
            };
        };
    
     });

    //JSON.stringify gets rid of that pesky ROWDATAPACKET
});
}
   //query to find the quantity of the item they selected
                //make sure the user quantity is less than the item quantity
                //if yes, display price
                //if no, display 'you are loser. you can't have that'            
getItems();


