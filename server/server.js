  const bodyParser =  require('body-parser');
  const  cors = require('cors');
  const  express =  require('express');

  const PORT = 3000;

  const app = express();

  app.use(bodyParser.json());

  app.use(cors());

  app.get('/', function(req, res){
  	res.send('Hello from Server')
  })

  app.post('/enroll', function(req, res) {
  	console.log(req.body)
  	res.status(200).send({"message": "Data received"}); //to get error we can write status 401 in stead of 200
  })

  app.listen(PORT, function() {
  	console.log("Server running on localhost:" + PORT);
  })