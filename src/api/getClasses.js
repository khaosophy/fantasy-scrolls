import { gql } from '@apollo/client';

const GET_CLASSES = gql`
  query Classes {
    classes {
      value: index
      label: name
    }
  }
`;

export default GET_CLASSES;