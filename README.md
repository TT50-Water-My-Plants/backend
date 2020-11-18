# backend

test test for heroku deploy

### ENDPOINTS for Plants

baseURL: https://water-my-plants-tt50.herokuapp.com/

### get All plants

[GET] /api/plants

### get specific plant info

[GET] /api/plants/:id

### get list of plants from specific user id

[GET] /api/plants/users/:id

### add plants to drop down menu

[POST] /api/plants
Format to send:
{
nickname: 'Lavender',
species: 'Lavandula',
h2o_frequency: '1 time per day'
}

### add specific plants that you chose from drop down menu to current user

[POST] /api/plants/:id/users
Format to send:
{
plant_id: '',
user_id: '',
}

### delete one of the list of plants from current user

[DELETE] /api/plants/:id
