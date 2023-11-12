import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Homepage/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';
import PageLoading from './pages/PageLoading';
import Feed from './pages/feed/Feed';
import Explore from './pages/explore/Explore';
import Notification from './pages/notifications/Notification';
import Messages from './pages/messages/Messages';
import Bookmarks from './pages/bookmarks/Bookmarks';
import List from './pages/lists/List';
import Profile from './pages/profile/Profile';
import More from './pages/more/More';

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
        <Route path='/home' element={<ProtectedRoute>
              <Home/>
          </ProtectedRoute>} >
            <Route path='feed' element={<Feed/>} />
            <Route path='explore' element={<Explore/>} />
            <Route path='notifications' element={<Notification/>} />
            <Route path='messages' element={<Messages/>} />
            <Route path='bookmarks' element={<Bookmarks/>} />
            <Route path='lists' element={<List/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='more' element={<More/>} />
          </Route>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
