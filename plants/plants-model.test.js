const Plants = require('./plants-model')
const db = require('../database/connection')

beforeEach(async () => {
   await db('plants').truncate()
})
beforeEach(async () => {
   await db('usersPlants').truncate()
})

describe('plants model', () => {
   const testPlantInfo = {
      nickname: 'Talula',
      species: 'Taleolendula',
      h2o_frequency: '2 time per day'
   }

   const plantUser = {plant_id: 1, user_id: 1}

   describe('findAllPlants()', () => {
      it('gets an empty array', async () => {
         const plants = await Plants.findAllPlants()
         expect(plants).toHaveLength(0)
      })
      it('gets all the plants after insertion', async () => {
         await db('plants').insert(testPlantInfo)
         expect(await Plants.findAllPlants()).toHaveLength(1)
      })
   })
   describe('addPlants()', () => {
      it('add plants to the plant list', async () => {
         expect(await Plants.addPlants(testPlantInfo)).toMatchObject(testPlantInfo)
      })
   })
   describe('findPlantsByUserId()', () => {
      it('gets all the list of plants associated with user 1', async () => {
         expect(await Plants.findPlantsByUserId(1)).toHaveLength(0)
      })
   })
   describe('addPlantsIdUserId()', () => {
      it('adds plants to specific user', async () => {
         await db('plants').insert(testPlantInfo) // since we use beforeEach, we have to add plants again
         expect(await Plants.addPlantsIdUserId(plantUser)).toHaveLength(1)
      })
   })
   describe('findPlantsById()', () => {
      it('find plants by id', async () => {
         await db('plants').insert(testPlantInfo) // since we use beforeEach, we have to add plants again
         expect(await Plants.findPlantsById(1)).toMatchObject(testPlantInfo)
      })
   })
   describe('removePlantsIdUserId()', () => {
      it('remove plants/users', async () => {
         await db('plants').insert(testPlantInfo)
         await db('usersPlants').insert(plantUser) // since we use beforeEach, we have to add plants again
         expect(await Plants.removePlantsIdUserId(1)).toEqual(1)
      })
   })
})

// https://jestjs.io/docs/en/expect
// https://www.npmjs.com/package/supertest