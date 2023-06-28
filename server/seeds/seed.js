const db = require('../config/connection');

// require models to seed
const { User } = require('../models');
const { Property } = require('../models');

// user and property seeds require 
const userSeeds = require('./userSeeds.json');
const propertySeeds = require('./propertySeeds.json');

db.once('open', async () => {
    // seed user model 
  await User.deleteMany({});
  await User.create(userSeeds);

  //seed property model
  await Property.deleteMany({});
  await Property.create(propertySeeds);

  console.log('all done!');
  process.exit(0);
});
