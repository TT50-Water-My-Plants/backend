const db = require('../database/connection')

module.exports = {
   findPlantsByUserId,
   findPlantsById,
   updatePlants,
   removePlants,
   addPlants,

}

function findPlantsByUserId(id){
   return db('plants as p')
      .select('nickname', 'species', 'h2o_frequency')
      .join('usersPlants as up', 'up.plant_id', 'p.id')
      .join('users as u', 'up.user_id', 'u.id')
      .where({ 'u.id': id })
   /*
      select
         nickname
      from plants as 'p'
      join usersPlants as 'up'
         on up.plant_id = p.id
      join users as 'u'
         on up.user_id = u.id
      where u.id = 2
   */
}

function findPlantsById(id){
   return db('plants')
      .where({ id })
      .first()
}

function addPlants(plant){
   return db('plants')
      .insert(plant)
      .then(([id]) => {
         return findPlantsById(id)
      })
}

function updatePlants(id, changes){
   return db('plants')
      .where({ id })
      .update(changes)
      .then(() => {
         return findPlantsById(id)
      })
}

function removePlants(id){
   return db('plants')
      .where({ id })
      .del()
}