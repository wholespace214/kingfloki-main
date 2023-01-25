import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes';

import { Provider } from './Provider';
import { Layout } from './layouts/layout';

import { Home } from './pages/home';
import { Wearable } from './pages/wearable';
import ScrollToTop from './utils/scrollToTop';

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
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
