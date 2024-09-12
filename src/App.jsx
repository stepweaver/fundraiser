import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from ''
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/checkout/Confirmation';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className='app'>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/confirmation' element={<Confirmation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
