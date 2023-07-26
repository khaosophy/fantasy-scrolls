import { gql } from '@apollo/client';

const GET_MONSTER = gql`
  query Monster($index: String) {
    monster(index: $index) {
      index
      name
      alignment
      actions {
        name
        desc
      }
      armor_class {
        type
        desc
        value
        armor {
          index
          name
          desc
          equipment_category {
            index
            name
            equipment {
              index
              name
              desc
            }
          }
          weight
          armor_category {
            index
            name
          }
          str_minimum
          stealth_disadvantage
          armor_class {
            base
            dex_bonus
            max_bonus
          }
        }
        spell {
          index
          area_of_effect {
            type
            size
          }
          attack_type
          casting_time
          classes {
            index
            name
            hit_die
            proficiencies {
              index
              name
              type
            }
            saving_throws {
              index
              name
              full_name
              desc
            }
            spellcasting {
              info {
                name
                desc
              }
              level
              spellcasting_ability {
                index
                name
                full_name
                desc
              }
            }
            spells {
              index
              attack_type
              casting_time
              components
              concentration
              desc
              duration
              higher_level
              level
              material
              name
              range
              ritual
            }
            starting_equipment {
              quantity
              equipment {
                index
                name
                desc
                weight
              }
            }
            class_levels {
              index
              level
              ability_score_bonuses
              subclass {
                index
                name
                desc
                subclass_flavor
              }
              features {
                index
                name
                level
                desc
                reference
              }
              prof_bonus
              spellcasting {
                cantrips_known
                spell_slots_level_1
                spell_slots_level_2
                spell_slots_level_3
                spell_slots_level_4
                spell_slots_level_5
                spell_slots_level_6
                spell_slots_level_7
                spell_slots_level_8
                spell_slots_level_9
                spells_known
              }
            }
            multi_classing {
              prerequisites {
                minimum_score
              }
              prerequisite_options {
                choose
                type
              }
            }
            proficiency_choices {
              desc
              choose
              type
              from {
                option_set_type
              }
            }
            starting_equipment_options {
              choose
              desc
              type
            }
          }
          subclasses {
            index
            name
            desc
            class {
              index
              name
              hit_die
            }
            subclass_flavor
            subclass_levels {
              index
              level
              ability_score_bonuses
              prof_bonus
            }
          }
          components
          concentration
          damage {
            damage_at_slot_level {
              level
              damage
            }
            damage_at_character_level {
              level
              damage
            }
          }
          dc {
            success
            desc
          }
          desc
          duration
          heal_at_slot_level {
            level
            healing
          }
          higher_level
          level
          material
          name
          range
          ritual
          school {
            index
            name
            desc
          }
        }
        condition {
          index
          name
          desc
        }
      }
      challenge_rating
      charisma
      condition_immunities {
        index
        name
        desc
      }
      constitution
      damage_immunities
      damage_resistances
      damage_vulnerabilities
      dexterity
      hit_dice
      hit_points
      hit_points_roll
      intelligence
      languages
      legendary_actions {
        name
        desc
      }
      proficiencies {
        proficiency {
          index
          name
          type
        }
        value
      }
      reactions {
        name
        desc
      }
      senses {
        blindsight
        darkvision
        passive_perception
        tremorsense
        truesight
      }
      size
      special_abilities {
        name
        desc
      }
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
      strength
      subtype
      type
      wisdom
      xp
    }
  }
`;

export default GET_MONSTER;