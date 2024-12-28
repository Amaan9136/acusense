// Global Layout (app/layout.jsx)
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@/app/globals.css';
import '@assets/iconify-icons/generated-icons.css';
import Providers from '@/components/Providers';

const RootLayout = async ({ children }) => {
  const direction = 'ltr';

  return (
    <html id="__next" dir={direction}>
      <body className="flex is-full min-bs-full flex-auto flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
