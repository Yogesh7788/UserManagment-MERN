import AddUser from './Components/AddUser';
import NavBar from './Components/NavBar';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import NotFound from './Components/NotFound';
import CodeForInterview from './Components/CodeforInterview';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CodeForInterview />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;