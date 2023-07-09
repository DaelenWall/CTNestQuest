const db = require('../config/connection');

// require models to seed
const { User, Property } = require('../models');

// user and property seeds require 
const userSeeds = require('./userSeeds.json');
const propertySeeds = require('./propertySeeds.json');


db.once('open', async () => {

  try {
    // delete ran on User and Property 

    await User.deleteMany({});
    await Property.deleteMany({});

    await User.create(userSeeds);

    // for loop to create a property and assign it's id to a user by username search and update
    for (let i = 0; i < propertySeeds.length; i++) {
      const { _id, landlord } = await Property.create(propertySeeds[i]);
    
        const user = await User.findOneAndUpdate(
          { username: landlord },
          {
            $addToSet: {
              property: _id,
            },
          }
        );
      }
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
