import { gql } from '@apollo/client';

const GET_SCHOOLS = gql`
  query Schools {
    magicSchools {
      index
      name
    }
  }
`;

export default GET_SCHOOLS;