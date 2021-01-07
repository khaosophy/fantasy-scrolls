const mongoose = require('mongoose');

const SpellSchema = new mongoose.Schema({
  slug: String,
  name: {
    type: String,
    required: [true, 'Please include a name for the spell.'],
    unique: false,
    trim: true,
    maxlength: [100, 'The spell name cannot be longer than 100 characters.'],
  },
  description: {
    type: [String],
    required: [true, 'Please include a description for the spell.'],
  },
  higher_level: [String],
  range: String,
  components: [String],
  material: String,
  ritual: Boolean,
  duration: String,
  concentration: Boolean,
  casting_time: String,
  level: Number,
  attack_type: String, // is it just ranged and melee?
  // damage: {
  //   type: String,
  //   // at_slot_level: {
  //   // }    
  // },
  school: String,
  classes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model('Spell', SpellSchema);