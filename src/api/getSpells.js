import { gql } from '@apollo/client';

const GET_SPELLS = gql`
  query Spells ($name: String, $school: StringFilter, $class: StringFilter, $concentration: Boolean) {
    spells (limit: 500, name: $name, school: $school, class: $class, concentration: $concentration) {
      index
      name
      school {
        name
      }
      level
      classes {
        name
      }
      concentration
    }
  }
`;

export default GET_SPELLS;