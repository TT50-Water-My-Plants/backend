exports.seed = function (knex, Promise) {
  return knex("usersPlants").insert([
    {
      plant_id: 1,
      user_id: 1
    },
    {
      plant_id: 2,
      user_id: 1
    },
    {
      plant_id: 3,
      user_id: 1
    },
    {
      plant_id: 4,
      user_id: 1
    },
    {
      plant_id: 5,
      user_id: 1
    },
    {
      plant_id: 6,
      user_id: 1
    },
    {
      plant_id: 7,
      user_id: 2
    },
    {
      plant_id: 8,
      user_id: 2
    },
    {
      plant_id: 9,
      user_id: 2
    },
    {
      plant_id: 10,
      user_id: 2
    },
    {
      plant_id: 11,
      user_id: 2
    },
    {
      plant_id: 12,
      user_id: 2
    },
  ]);
};
