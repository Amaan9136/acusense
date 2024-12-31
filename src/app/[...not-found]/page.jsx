// Component Imports
import Providers from '@components/Providers';
import BlankLayout from '@layouts/BlankLayout';
import NotFound from '@views/NotFound';

// Util Imports
import { getServerMode } from '@core/utils/serverHelpers';

export const metadata = {
  title: 'Not Found - Royal Software Company',
  description: 'RSC Royal Software Company.',
};

const NotFoundPage = () => {
  // Vars
  const direction = 'ltr'
  const mode = getServerMode()

  return (
    <Providers direction={direction}>
      <BlankLayout>
        <NotFound mode={mode} />
      </BlankLayout>
    </Providers>
  )
}

export default NotFoundPage
