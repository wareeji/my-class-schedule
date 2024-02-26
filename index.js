const express = require('express');
const morgan = require('morgan');
const {createWriteStream} = require('fs');
const myclassRouter = require('./myclass');

const app = express();

const accessLogStream = createWriteStream('access.log',{flags : 'a'});

app.use(express.static('public'));
app.use(morgan('common', {immediate : true , stream : accessLogStream}));

app.use('/myclass',myclassRouter);

app.get('/',(request,response) => response.redirect('/myclass'));

app.listen(8080,() => {
    console.log
    ('Server is listening to http://localhost:8080')
});

