// Component Imports
import Login from '@views/Login';

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers';

export const metadata = {
  title: 'Login - Royal Software Company',
  description: 'RSC Royal Software Company.',
};

const LoginPage = () => {
  // Vars
  const mode = getServerMode()

  return <Login mode={mode} />
}

export default LoginPage
