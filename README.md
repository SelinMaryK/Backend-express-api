## Backend-express-api

### Backend Rest API for Insurance Company

Need to create a Web API that exposes the following services with some added constraints:

• Get user data filtered by user id -> Can be accessed by users with role "users" and "admin" 

• Get user data filtered by user name -> Can be accessed by users with role "users" and "admin" 

• Get the list of policies linked to a user name -> Can be accessed by users with role "admin" 

• Get the user linked to a policy number -> Can be accessed by users with role "admin" 

### How to Use
### Clone this repository

### Go into the repository
$ cd Backend-express-api

### Install dependencies
$ npm install

### Run the app
$ npm start

### API Documentation
- **GET: /api/clients/:idName - Get client data**
With this api, users with user role "Admin" or "User" can retrieve client details for the given user name or id.

Sample API: 

http://127.0.0.1:3000/api/clients/britney  --> Passing username
{"message":"Success","reqClient":{"id":"a0ece5db-cd14-4f21-812f-966633e7be86","name":"Britney","email":"britneyblankenship@quotezart.com","role":"admin"}}

http://127.0.0.1:3000/api/clients/e8fd159b-57c4-4d36-9bd7-a59ca13057bb --> Passing user id
{"message":"Success","reqClient":{"id":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb","name":"Manning","email":"manningblankenship@quotezart.com","role":"admin"}}

- **GET: /api/policies/:clientName - Get policies for the client**
With this api, users with user role "Admin" can retrieve all the policies linked to a user

Sample API:

http://127.0.0.1:3000/api/policies/britney

{"message":"Success",
"clientPolicies":
[
{
"id":"7b624ed3-00d5-4c1b-9ab8-c265067ef58b",
"amountInsured":399.89,
"email":"inesblankenship@quotezart.com",
"inceptionDate":"2015-07-06T06:55:49Z",
"installmentPayment":true,
"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"
},
.
.
.,
{
"id":"0df3bcef-7a14-4dd7-a42d-fa209d0d5804",
"amountInsured":705.14,
"email":"inesblankenship@quotezart.com",
"inceptionDate":"2014-05-11T12:28:41Z",
"installmentPayment":false,
"clientId":"a0ece5db-cd14-4f21-812f-966633e7be86"
}
]
}


- **GET: /api/policies/client/:policyId - Get client data for the policy id**

http://127.0.0.1:3000/api/policies/client/64cceef9-3a01-49ae-a23b-3761b604800b

{"message":"Success","clientDetails":{"id":"e8fd159b-57c4-4d36-9bd7-a59ca13057bb","name":"Manning","email":"manningblankenship@quotezart.com","role":"admin"}}
