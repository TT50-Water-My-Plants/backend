exports.seed = function(knex) {
  return knex('plants').insert([
     {
        nickname: 'Bamboo',
        species: 'Bambuseae',
        h2o_frequency: '2 times a day'
     },
     {
        nickname: 'Arrowwood',
        species: 'Cornus florida',
        h2o_frequency: '1 times a day'
     },
     {
        nickname: 'Bittersweet',
        species: 'Solanum dulcamara',
        h2o_frequency: '1 times a day'
     },
     {
        nickname: 'Butterfly flower',
        species: 'Asclepias syriaca',
        h2o_frequency: '3 times a day'
     },
     {
        nickname: 'Coffee plant',
        species: 'Coffea spp',
        h2o_frequency: '1 times a day'
     },
     {
        nickname: 'Coneflower',
        species: 'Rudbeckia fulgida',
        h2o_frequency: '2 times a day'
     },
     {
        nickname: 'Cotton plant',
        species: 'Gossypium',
        h2o_frequency: '4 times a day'
     },
     {
        nickname: 'Daisy',
        species: 'Bambuseae',
        h2o_frequency: '1 times a day'
     },
     {
        nickname: 'Easter orchid',
        species: 'Cattleya schoroederae',
        h2o_frequency: '2 times a day'
     },
     {
        nickname: 'Ferns',
        species: 'Polystichum ascrostichoides',
        h2o_frequency: '3 times a day'
     },
     {
        nickname: 'Golden chain',
        species: 'Laburnum',
        h2o_frequency: '2 times a day'
     },
     {
        nickname: 'Lavender',
        species: 'Lavandula',
        h2o_frequency: '1 times a day'
     },
  ])
}