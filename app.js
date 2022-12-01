const express = require('express');
const app = express();
/// use bodyParser library 
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();



app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
res.render('index');
})


app.listen(3000, () => {
	console.log('Express app listening on port 3000...')
});