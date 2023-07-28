import {BroweserRouter,Navigate,Route, Routes} from 'react-router-dom';
import HomePage from 'scenes/HomePage';
import LoginPage from 'scenes/LoginPage';
import Navbar from 'scenes/Navbar';
import ProfilePage from 'scenes/ProfilePage';


function App() {
  return (
    <div className="app">
      <BroweserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/profile/:userId" element={<ProfilePage/>}/>

        </Routes>
      </BroweserRouter>
 
    </div>
  );
}

export default App;
