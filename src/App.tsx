import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/home';
import { Wearable } from './pages/wearable';
import ScrollToTop from './utils/scrollToTop';
import { NotFoundPage } from './pages/404';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Provider>
          <Layout>
            <ScrollToTop />
            <Routes>
              <Route path={PUBLIC_ROUTES.default} element={<Wearable />} />
              <Route path={PUBLIC_ROUTES.wearable} element={<Home />} />
              <Route path={PUBLIC_ROUTES.error404} element={<NotFoundPage />} />
              <Route path="*" element={<Navigate to={PUBLIC_ROUTES.error404} replace />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
