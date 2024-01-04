// SignInForm.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignInMutation } from '../../utils/graphql/hooks/useSignInMutation';

interface SignInFormData {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
  const [signInUser, { loading, error }] = useSignInMutation();

  const onSubmit: SubmitHandler<SignInFormData> = async (formData) => {
    try {
      const result = await signInUser({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });

      if (result.data?.authenticateUser) {
        console.log('User signed in:', result.data.authenticateUser);
        // Optionally, you can perform additional actions
      } else {
        console.error('Sign in failed');
      }
    } catch (mutationError) {
      if (mutationError instanceof Error) {
        console.error('Error signing in:', mutationError.message);
      }
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-lg border border-gray-300"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-3xl mb-6 text-center text-gray-800 font-semibold">Sign In</h2>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
          Email
        </label>
        <input
          {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
          Password
        </label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>

      {error && <p className="text-red-500 mt-2">Error: {error.message}</p>}
    </form>
  );
};

export default SignInForm;
