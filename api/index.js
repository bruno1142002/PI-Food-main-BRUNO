
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

const glutenFree = Type.findOrCreate({
  where:{
    name:'Gluten Free'
  }
});
const vegetarian = Type.findOrCreate({
  where:{
    name:'Vegetarian'
  }
});
const lactoVegetarian = Type.findOrCreate({
  where:{
    name:'Lacto Ovovegetarian'
  }
});
const ovoVegetarian = Type.findOrCreate({
  where:{
    name:'Dairy Free'
  }
});
const vegan = Type.findOrCreate({
  where:{
    name:'Vegan'
  }
});
const pescetarian = Type.findOrCreate({
  where:{
    name:'Pescatarian'
  }
});
const paleo = Type.findOrCreate({
  where:{
    name:'Paleolithic'
  }
});
const primal = Type.findOrCreate({
  where:{
    name:'Primal'
  }
});


});
});