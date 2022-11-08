import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
//import PrivateRoute from './PrivateRoute'
import Courses from '../components/Services'
import Blog from '../components/Blog'
import CourseDetails from '../components/CourseDetails'
import AddService from '../components/AddService'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      
      {
        path: '/services',
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/addService',
        element: <AddService></AddService>
      },
      {
        path: '/courses/:id',
        element: <CourseDetails />,
        loader: ({params}) => fetch(`https://programming-language-server.vercel.app/course/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog />
      },
     
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      //{
      //  path: '/checkout/:id',
      //  element: (
      //    <PrivateRoute>
      //      <CheckOut />
      //    </PrivateRoute>
      //  ),
      //  loader: ({params}) => fetch(`https://programming-language-server.vercel.app/course/${params.id}`)
      //},
      
    ],
  },
])

export default router
