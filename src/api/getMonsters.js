import { gql } from '@apollo/client';

const GET_MONSTERS = gql`
  query Monsters(
    $name: String,
    $type: MonsterTypeFilter,
  ) {
    monsters(
      limit: 500,
      name: $name,
      type: $type,
    ) {
      index
      name
      type
      subtype
      challenge_rating
      speed {
        burrow
        climb
        fly
        hover
        swim
        walk
      }
    }
  }
`;

export default GET_MONSTERS;