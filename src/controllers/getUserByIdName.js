const axios = require('axios');
const insuranceData = require('../config/insuranceData');

const userData = (req, res) => {
    let reqIdName = req.params.idName.toLowerCase();
    let reqClient; 
    let clientRole;
    let clients = [];

    insuranceData.getClientData().then((response) => {
        response.data.clients.map((client) =>{
            clients.push(client);
        });
        reqClient = (clients.find(client => client.id.toLowerCase() === reqIdName))||
            (clients.find(client => client.name.toLowerCase() === reqIdName));
        if(reqClient){
            clientRole = reqClient.role.toLowerCase() === 'admin'|| reqClient.role.toLowerCase() ==='user';
            if (clientRole) {
                res.status(200).json({
                    message: 'Success',
                    status: res.status,
                    reqClient
                  })
              }else{
                res.status(401).json({
                    message: 'Unauthorized access. Only users with role \'Admin\' or \'User\' can view the data',
                    status: res.status
                  })
              } 
        }else{
            res.status(404).json({
                message: 'No clients found with the given user name or id',
                status: res.status
              })
        }
    });
    
}

module.exports = userData;
