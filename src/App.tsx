import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'

import Home from './components/home/home';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';

function App() {



  const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />
  },
    {
    path: "/signup",
    element: <SignUp/>
  }
  ]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
