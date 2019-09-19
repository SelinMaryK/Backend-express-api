const axios = require('axios');
const insuranceData = require('../config/insuranceData');

const userDetails = (req, res) => {
    let policyId = req.params.policyId.toLowerCase();
    let policyDetails; 
    let clientDetails;
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
        policyDetails = clientPolicies.find(policy => policy.id.toLowerCase() === policyId);        
        if(policyDetails){
            clientDetails = clients.find(client => client.id === policyDetails.clientId);
            clientRole = clientDetails ? clientDetails.role.toLowerCase() === 'admin': false;
            if(clientDetails && clientRole) {              
                res.status(200).json({
                    message: 'Success',
                    status: res.status,
                    clientDetails
                  })
              }else if(clientDetails && !clientRole){
                res.status(401).json({
                    message: 'Unauthorized access. Only users with role \'Admin\' can view the data',
                    status: res.status
                  })
              } else {
                res.status(404).json({
                    message: 'No clients found with the given policy id',
                    status: res.status
                  })
              }
        }else{
            res.status(404).json({
                message: 'Invalid policy id',
                status: res.status
              })
        }
            
    }));
    
}

module.exports = userDetails;
