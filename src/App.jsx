import {  Route, Routes } from 'react-router-dom'; 
import Layout from './pages/layout/layout';
import ChatPage from './pages/chat/chat';
import Login from './pages/login/login';
import IsUser from './components/isUser/isUser';


function App() {
 
  return (
    <> 
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='chat' element={<IsUser><ChatPage/></IsUser>}/>
          <Route path='login' element={<Login/>} />
        </Route>
    </Routes>
    </>
  )
}

export default App
