// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../utils/graphql/apollo';
function App() {
  return (
    <ApolloProvider client={apolloClient}>
      {/* Your app components */}
      <div>
        {/* <NxWelcome title="my-client" /> */}
        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <br />
        <hr />
        <br />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <SignUp />
            }
          />
          <Route
            path="/page-2"
            element={
              <SignIn  />
            }
          />
        </Routes>
        {/* END: routes */}
      </div >
       </ApolloProvider >
  );
}

export default App;
