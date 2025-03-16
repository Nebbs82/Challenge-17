const User = require("../models/User")
const Thought = require("../models/Thought")
const mongoose = require("mongoose")
require('dotenv').config();

async function seedDb() {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(async () => {
            console.log('MongoDB connected')

            // delete all in the users table first
            await User.deleteMany({});

            // insert many user
            const users = await User.insertMany([
                {
                  username: "test1",
                  email: "test1@user.com",
                },
                {
                  username: "test2",
                  email: "test2@user.com",
                },
                {
                  username: "test3",
                  email: "test3@user.com",
                },
              ]);
              
              console.log("Database seed complete!!")

              process.exit(1);
        })
        .catch(err => console.error('MongoDB connection error:', err));

      } catch (err) {
        console.log(err);
        
      }
      
}

seedDb();