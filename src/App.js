import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import LoginPage from './pages/loginPage/LoginPage';
import CartPage from './pages/cartPage/CartPage';
import DetailPage from './pages/detailPage/DetailPage';
import SignUpPage from './pages/signUpPage/SignUpPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
  {
    path: "/shopPage",
    element: <ShopPage />,
  },
  {
    path: "/loginPage",
    element: <LoginPage />,
  },
  {
    path: "/signUpPage",
    element: <SignUpPage />,
  },
  {
    path: "/cartPage",
    element: <CartPage />,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
