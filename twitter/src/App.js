import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Homepage/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import PageLoading from './pages/PageLoading';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
        <Home/>
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='*' element={<h1>This is Wrong Route</h1>} />
        <Route path='/page-loading' element={<PageLoading/>} />
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
