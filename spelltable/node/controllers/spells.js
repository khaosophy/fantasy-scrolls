const Spell = require('../models/Spell');
const asyncHandler = require('../middleware/async');

// @desc      Get all spells
// @route     GET /api/v1/spells
// @access    Public
exports.getSpells = asyncHandler(async (req, res, next) => {
  const spells = await Spell.find();

  /**
   * todo:
   * what data do we want to return here?
   * - name
   * - ritual
   * - concentration
   * - school
   * - level
   */

  res.status(200).json({
    success: true,
    count: spells.length,
    data: spells,
  })
});

// @desc      Get single spell based on ID
// @route     GET /api/v1/spells/:id
// @access    Public
exports.getSpell = asyncHandler(async (req, res, next) => {
  const spell = await Spell.findById(req.params.id);

  // if(!spell) {
  //   return next(new ErrorResponse(`Spell not found with id of ${req.params.id}`, 404));
  // }

  res.status(200).json({
    success: true,
    data: spell,
  })
});