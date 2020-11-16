exports.seed = function (knex, Promise) {
  return knex("users").insert([
    {
      username: "slimShady",
      phone_number: "626-555-5555",
      password: "password123",
    },
    {
      username: "janeDoe",
      phone_number: "309-222-2222",
      password: "password456",
    }
  ]);
};
