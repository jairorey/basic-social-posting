import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import UserDetail from './screens/UserDetail';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/user-detail/:userId" element={<UserDetail />} />
    </Routes>
  )
}

export default App
