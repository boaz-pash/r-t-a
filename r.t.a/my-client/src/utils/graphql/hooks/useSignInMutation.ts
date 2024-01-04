import { useMutation } from '@apollo/client';
import { gql } from 'graphql-tag';

interface SignInMutationData {
  authenticateUser: {
    id: string;
    email: string;
  };
}

interface SignInMutationVariables {
  email: string;
  password: string;
}
const AUTHENTICATE_USER = gql`
  mutation authenticateUser($email: String!, $password: String!) {
    authenticateUser(input: { pEmail: $email, pPassword: $password }) {
      clientMutationId
    }
  }
`;
export const useSignInMutation = () => {
  return useMutation<SignInMutationData, SignInMutationVariables>(
    AUTHENTICATE_USER
  );
};
