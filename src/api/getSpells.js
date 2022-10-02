import { gql } from '@apollo/client';

const GET_SPELLS = gql`
  query Spells (
    $name: String,
    $school: StringFilter,
    $class: StringFilter,
    $concentration: Boolean,
    $level: IntFilter
  ) {
    spells (
      limit: 500,
      name: $name,
      school: $school,
      class: $class,
      concentration: $concentration,
      level: $level
    ) {
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
      ritual
    }
  }
`;

export default GET_SPELLS;