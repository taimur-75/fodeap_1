const mongoose = require('mongoose');

const db_fetch = async () => {
  try {
    // Connect to MongoDB using async/await
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected.");

    // Fetch the data from the collection
    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    global.food_items = data;
    //console.log(global.food_items)

    const foodCategory = mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();
    global.foodCategory = catData;
    //console.log(global.foodCategory)
  } catch (err) {
    console.error("Connection or Data Fetching Error:", err);
  }
};

module.exports = db_fetch;


