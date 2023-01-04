import { BrowserRouter, Route, Routes as Router, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import HttpPage from "./pages/Http";
import LoginPage from "./pages/Login";

import HomeLayout from "./components/Layout";
import DogPage from "./pages/Dog";

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomeLayout />}>
          <Route path='/home/' element={<HomePage />} />
          <Route path='/home/http' element={<HttpPage />} />
          <Route path='/home/dog' element={<DogPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Router>
    </BrowserRouter>
  )
}

export default Routes