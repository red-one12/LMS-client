import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBooks from "../pages/AddBooks";
import BorrowedBooks from "../pages/BorrowedBooks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CategoryBooksPage from "../pages/CategoryBooksPage";
import DetailsBook from "../pages/DetailsBook";
import UpdateBook from "../components/UpdateBook";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allBooks',
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
      },
      {
        path: '/addBooks',
        element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path: '/borrowedBooks',
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: '/books/:category',
        element: <CategoryBooksPage></CategoryBooksPage>
      },
      {
        path: '/details/:id',
        element: <DetailsBook></DetailsBook>
      },
      {
        path: '/updateBook/:id',
        element: <UpdateBook></UpdateBook>
      }
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);



export default router;