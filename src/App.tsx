import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
import './App.css'

import Home from './components/home/home';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import ProfileComp from './components/home/sidebar/profile/profile';

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
  },
  {
    path: '/profile',
    element: <ProfileComp />
  }
  ]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
