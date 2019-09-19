const axios = require('axios');
const insuranceData = require('../config/insuranceData');

const policyDetails = (req, res) => {
    let reqName = req.params.clientName.toLowerCase();
    let reqClient; 
    let clientRole;
    let clients = [];
    let clientPolicies = [];

    insuranceData.getClient_PolicyData().then(axios.spread(function (clientResp, policyResp) {
        clientResp.data.clients.map((client) =>{
            clients.push(client);
        });
        policyResp.data.policies.map((policy) =>{
            clientPolicies.push(policy);
        });
        reqClient = clients.find(client => client.name.toLowerCase() === reqName);
        
        if(reqClient){
            clientRole = reqClient.role.toLowerCase() === 'admin';
            clientPolicies = clientPolicies.filter(policy => policy.clientId === reqClient.id);
            if(clientPolicies && clientRole) {              
                res.status(200).json({
                    message: 'Success',
                    status: res.status,
                    clientPolicies
                  })
              }else if(!clientRole){
                res.status(401).json({
                    message: 'Unauthorized access. Only users with role \'Admin\' can view the data',
                    status: res.status
                  })
              } else {
                res.status(404).json({
                    message: 'No policy found with the given user name',
                    status: res.status
                  })
              }
        }else{
            res.status(404).json({
                message: 'No clients found with the given user name',
                status: res.status
              })
        }
            
    }));
    
}

module.exports = policyDetails;
