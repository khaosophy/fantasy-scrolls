import { gql } from '@apollo/client';

const GET_MONSTERS = gql`
  query Monsters(
    $name: String,
    $type: MonsterTypeFilter,
    $challenge_rating: FloatFilter,
  ) {
    monsters(
      limit: 500,
      name: $name,
      type: $type,
      challenge_rating: $challenge_rating,
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
        swim
      }
    }
  }
`;

export default GET_MONSTERS;