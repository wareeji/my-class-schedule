const getAll = require('./model');
const render = require('./view');

async function listClass(request,response)
{
    const data = await getAll();
    const body = render(data);
    // console.log(body);
    response.send(body);
    
};

module.exports = listClass;