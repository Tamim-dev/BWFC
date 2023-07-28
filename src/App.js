import './App.css';
import Account from './components/Account';
import Banner from './components/Banner';
import Choose from './components/Choose';
import Feature from './components/Feature';
import Finance from './components/Finance';
import Financy from './components/Financy';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Sponsor from './components/Sponsor';
import Testimonials from './components/Testimonials';
import Track from './components/Track';


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Sponsor/>
    <Feature/>
    <Payment/>
    <Account/>
    <Testimonials/>
    <Financy/>
    <Finance/>
    <Choose/>
    <Track/>
    <Footer/>
    </>
  );
}

export default App;
