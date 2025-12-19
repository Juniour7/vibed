import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Other components
import AppLayout from './components/layout/AppLayout';
import PropertyDetail from './components/findroom/PropertyDetail';

// App Pages
import Landing from './pages/Landing';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import FindRoom from './pages/FindRoom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Landing />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/find-room' element={<FindRoom />} />
            <Route path="/details/:id" element={<PropertyDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
