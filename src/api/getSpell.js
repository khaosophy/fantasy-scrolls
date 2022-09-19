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
    }
  }
`;

export default GET_SPELL;