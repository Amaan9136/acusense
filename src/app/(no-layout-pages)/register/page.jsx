// Component Imports
import Register from '@views/Register';

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers';

export const metadata = {
  title: 'Register - Royal Software Company',
  description: 'RSC Royal Software Company.',
};


const RegisterPage = () => {
  // Vars
  const mode = getServerMode()

  return <Register mode={mode} />
}

export default RegisterPage
