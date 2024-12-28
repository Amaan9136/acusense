// Pages Layout (app/(pages-layout)/layout.jsx)
import 'react-perfect-scrollbar/dist/css/styles.css';
import '@/app/globals.css';
import '@assets/iconify-icons/generated-icons.css';

import LayoutWrapper from '@layouts/LayoutWrapper';
import VerticalLayout from '@layouts/VerticalLayout';
import Providers from '@components/Providers';
import Navigation from '@components/layout/vertical/Navigation';
import Navbar from '@components/layout/vertical/Navbar';
import VerticalFooter from '@components/layout/vertical/Footer';

const PagesLayout = async ({ children }) => {
  return (
    <LayoutWrapper
      verticalLayout={
        <VerticalLayout
          navigation={<Navigation />}
          navbar={<Navbar />}
          footer={<VerticalFooter />}
        >
          {children}
        </VerticalLayout>
      }
    />
  );
};

export default PagesLayout;
