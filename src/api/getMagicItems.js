import { gql } from '@apollo/client';

const GET_MAGIC_ITEMS = gql`
  query MagicItems ($name: String) {
    magicItems (limit: 500, name: $name) {
      index
      name
    }
  }
`;

export default GET_MAGIC_ITEMS;