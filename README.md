# backend
test test for heroku deploy



baseURL: https://water-my-plants-tt50.herokuapp.com/

ENDPOINTS
-----------------------------------------------------------------
[GET] /api/account/ 
   Description: get list of registered users info

[GET] /api/account/:id
   Description: get specific registered user info

[GET] /api/plants/:id
   Description: specific plant info

[GET] /api/plants/users/:id
   Description: get list of plants from specific user id

[POST] /api/auth/register
   Description: register new user
   Format to send: 
   { 
      username: 'LambdaHost', 
      phone_number: '909-123-1234', 
      password: 'Lambda123!' 
   }

[POST] /api/auth/login
   Description: login current user
   Format to send:
   { 
      username: '', 
      password: '' 
   }

[POST] /api/plants/users/:id
   Description: add plants at specific user id
   Format to send: 
   { 
      nickname: 'Lavender', 
      species: 'Lavandula', 
      h2o_frequency: '1 time per day' 
   }

[PUT] /api/plants/:id
   Description: update specific plant
   Format to send:
   { 
      nickname: 'Lavender', 
      species: 'Lavandula', 
      h2o_frequency: '1 time per day' 
   }

[DELETE] /api/plants/:id
   Description: delete specific plant

