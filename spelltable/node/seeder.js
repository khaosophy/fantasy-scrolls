const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

// Load models
const Spell = require('./models/Spell');

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// collect data from API
const API_base = 'https://www.dnd5eapi.co/api';

async function getSpellIds() {
  try {
    const response = await axios.get(`${API_base}/spells`)
    const { results } = response.data;
    return results.map(result => result.index);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

async function getSpellData(id) {
  try {
    const response = await axios.get(`${API_base}/spells/${id}`);
    // console.log(response.data);
    return {
      slug: response.data.index,
      name: response.data.name,
      description: response.data.desc,
      higher_level: response.data.higher_level,
      range: response.data.range,
      components: response.data.components,
      material: response.data.material,
      ritual: response.data.ritual,
      duration: response.data.duration,
      concentration: response.data.concentration,
      casting_time: response.data.casting_time,
      level: response.data.level,
      attack_type: response.data.attack_type,
      // todo: damage
      school: response.data.school.name,
      classes: response.data.classes.map(c => c.name),
    };
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

async function populateSpellData() {
  try {
    const spellIds = await getSpellIds();

    let spellData = [];
    for(let spell of spellIds) {
      console.log(`Querying spell data for ${spell}...`);
      const data = await getSpellData(spell);
      spellData.push(data);
    }
    return spellData;
    // console.log(spellData);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Import into DB
const importData = async () => {
  try {
    const spells = await populateSpellData();
    await Spell.create(spells);
    console.log(colors.green.inverse('Data imported.'))
  } catch (err) {
    console.error(err);
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Spell.deleteMany();
    console.log(colors.red.inverse('Data deleted.'))
  } catch (err) {
    console.error(err);
  }
}

if(process.argv[2] === '-i' || process.argv[2] === '--import') {
  importData().then(() => process.exit());
} else if (process.argv[2] === '-d' || process.argv[2] === '--delete') {
  deleteData().then(() => process.exit());
} else {
  console.log(colors.red('Invalid command.'))
  process.exit();
}