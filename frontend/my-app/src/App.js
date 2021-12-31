import React from 'react';
import { Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Logout from './components/auth/logout';
import Home from './components/app/home';


function App() {
  const router = (
		<Router>
			<React.StrictMode>
        <div className="RootContent">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        </div>
			</React.StrictMode>
		</Router>
	)
  return router;
}

export default App;
