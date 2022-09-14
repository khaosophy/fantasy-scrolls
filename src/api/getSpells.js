import { gql } from '@apollo/client';

const GET_SPELLS = gql`
  query Spells ($name: String) {
    spells (limit: 500, name: $name) {
      index
      name
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