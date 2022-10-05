import { gql } from '@apollo/client';

const GET_SPELL = gql`
  query Spell ($index: String) {
    spell (index: $index) {
      name
      desc
      school {
        name
      }
      level
      concentration
      classes {
        name
      }
      casting_time
      duration
      ritual
      components
      material
      range
      damage {
        damage_type {
          name
        }
      }
      dc {
        type {
          full_name
        }
      }
      higher_level
    }
  }
`;

export default GET_SPELL;