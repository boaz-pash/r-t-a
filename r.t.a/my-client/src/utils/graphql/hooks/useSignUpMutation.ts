import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';

interface SignUpMutationData {
  insertUser: {
    id: string;
    userName: string;
    email: string;
  };
}

interface SignUpMutationVariables {
  userName: string;
  email: string;
  password: string;
}
const CREATE_USER = gql`
  mutation createUser($userName: String!, $email: String!, $password: String!) {
    insertUser(
      input: { pEmail: $email, pPassword: $password, pUsername: $userName }
    ) {
      clientMutationId
    }
  }
`;
// const CREATE_USER = gql`
//   mutation {
//     insertUser(
//       input: { pEmail: , pPassword: , pUsername:  }
//     ) {
//       clientMutationId
//     }
//   }
// `;
// mutation insertUser($userName: String!, $email: String!, $password: String!) {
//   insertUser(userName: $userName, email: $email, password: $password) {
//     id
//     userName
//     email
//   }
// }

export const useSignUpMutation = () => {
  return useMutation<SignUpMutationData, SignUpMutationVariables>(CREATE_USER);
};
