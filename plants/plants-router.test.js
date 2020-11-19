const request = require('supertest')
const server = require('../api/server')
const db = require('../database/connection')

const registerUser = {
   username: 'test1234',
   phone_number: '909-922-8765',
   password: 'testpass123'
}
const loginUser = {
   username: 'test1234',
   password: 'testpass123'
}
let token;

beforeAll(async ()=> {
   // await db('users').truncate()
   request(server)
      .post('/api/auth/register')
      .send(registerUser)
      .then(res => {
         console.log("::: REGISTER ::: -->", res.body)
   })
})

beforeAll((done) => {
   request(server)
      .post('/api/auth/login')
      .send(loginUser)
      .then((response) => {
         token = response.body.token
         console.log("::: TOKEN ::: -->", token)
         done();
     });
 });

// afterAll(async () => {
//    await db('users').truncate()
// })

//  beforeAll(async ()=> {
//    await db('plants').truncate()
// })

describe('plants-router.js module', () => {
   it('is the testing environment', () => {
      expect(process.env.DB_ENV).toBe('testing')
   })
})

const testPlantInfo = {
   nickname: 'Lavender',
   species: 'Lavandula',
   h2o_frequency: '1 time per day'
}
describe('[POST] /api/plants', () => {
   // should return 401 authorization error
   it('authorized to add plants', () => {
      return request(server)
         .post('/api/plants')
         .send(testPlantInfo)
         .expect('Content-Type', /json/)
         .expect(401)
   })
})

describe('[POST] /api/plants', () => {
   // should return 201 authorization success
   it('authorized to add plants', () => {
      return request(server)
         .post('/api/plants')
         .set('Authorization', token) // get token and set it to 'Authorization' in header
         .send(testPlantInfo)
         .then(res => {
            console.log('::: ADDED PLANT :::', res.body)
            expect(201)
         })
   })
})

let plant_id = 1 // currently there are only one plant added as plant_id=1
let plantUser = {
   plant_id: plant_id,
   user_id: 1 // also user as well as user_id=1
}
describe('[POST] /api/plants/:id/users', () => {
   it('authorized to add plants associated specific user', () => {
      return request(server)
         .post(`/api/plants/${plant_id}/users`)
         .set('Authorization', token)
         .send(plantUser)
         .then(res => {
            console.log('::: ADDED PLANT/USER :::', res.body)
            expect(201)
         })
   })
})

describe('[GET] /api/plants', () => {
   it('authorized to get all plants', () => {
      return request(server)
         .get('/api/plants')
         .set('Authorization', token)
         .expect('Content-Type', /json/)
         .expect(201)
   })
})

describe('[GET] /api/plants/:id', () => {
   it('authorized to get specific plant', () => {
      return request(server)
         .get(`/api/plants/${plant_id}`)
         .set('Authorization', token)
         .expect('Content-Type', /json/)
         .expect(201)
   })
})

describe('[DELETE /api/plants/:id', () => {
   it('authorized to delete specific plant associated with specific user id', () => {
      return request(server)
         .delete(`/api/plants/${plant_id}`)
         .set('Authorization', token)
         .expect('Content-Type', /json/)
         .expect(201)
   })
})