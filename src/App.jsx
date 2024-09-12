import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Home from './pages/home/Home';
import Checkout from './pages/checkout/Checkout';
import Confirmation from './pages/checkout/Confirmation';
import Navbar from './pages/global/Navbar';
import CartMenu from './pages/global/CartMenu';

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
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/confirmation' element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </Router>
    </div>
  );
}

export default App;
