
const axios = require('axios');

const insuranceData = {
    getClientData: function() {
        try{
            return axios.get('http://www.mocky.io/v2/5808862710000087232b75ac');
        }catch(err){
            console.error(err);
        }
    },
    getPolicyData: function() {
        try{
            return axios.get('http://www.mocky.io/v2/580891a4100000e8242b75c5');
        }catch(err){
            console.error(err);
        }
    },
    getClient_PolicyData: function(){
        try{
            return axios.all([this.getClientData(), this.getPolicyData()]);
        }catch(err){
            console.error(err);
        }
    }
}

module.exports = insuranceData;