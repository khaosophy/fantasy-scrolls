import { gql } from '@apollo/client';

/**
 * todo: how to pass in variables?
 * I want to call this from SpellTable
 */
const GET_SPELLS = gql`
  query Spells ($name: String) {
    spells (limit: 500, name: $name) {
      index
      name
      desc
      school {
        name
      }
      level
      classes {
        name
      }
    }
  }
`;

export default GET_SPELLS;