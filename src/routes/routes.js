import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../components/ErrorPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Main from '../layout/Main'
import PrivateRoute from './PrivateRoute'
import Courses from '../components/Services'
import Blog from '../components/Blog'
import AddService from '../components/AddService'
import ServiceDetails from '../components/ServiceDetails'
import MyReview from '../components/MyReview'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://youtuber-server.vercel.app/services3')
      },
      
      {
        path: '/services',
        element: <Courses />,
        loader: () => fetch('https://youtuber-server.vercel.app/services')
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService /></PrivateRoute>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails />,
        loader: ({params}) => fetch(`https://youtuber-server.vercel.app/services/${params.id}`)
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
      {
        path: '/review',
        element: <PrivateRoute><MyReview /></PrivateRoute>,
      },
      
    ],
  },
])

export default router
