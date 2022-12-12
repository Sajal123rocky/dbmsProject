var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'project',
  multipleStatements: true

});
function handleDisconnect() {
	console.log('handleDisconnect()');
	connection.destroy();
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
	    if(err) {
			console.log(' Error when connecting to db  (DBERR001):', err);
			setTimeout(handleDisconnect, 1000);
	    }
	});

}
connection.connect(function(err) {
	if(err) {
		console.log('Connection is asleep (time to wake it up): ', err);
		setTimeout(handleDisconnect, 1000);
		handleDisconnect();
	}
	else
	console.log("success");
	});

/*connection.connect((err)=>{
  if(!err)
  {
    console.log("connected");
  }else{
    console.log("Connection Failed");
  }

});*/


module.exports = connection;
