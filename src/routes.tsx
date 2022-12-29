import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes