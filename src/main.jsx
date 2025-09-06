import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' 
import store from './store/store.js'


import { createRoot } from 'react-dom/client'
import { AuthLayout, Login } from './components/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import AddPost from './pages/AddPost.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import EditPost from './pages/EditPost.jsx'
import Allposts from './pages/Allposts.jsx' 
import Post from './pages/Post.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/',
      element: <Home />,
      },
      {
        path: 'login',
        element: (
          <AuthLayout userShouldBeAuthenticated={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout userShouldBeAuthenticated={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout>
            {" "}
            <Allposts />
          </AuthLayout>
        ),
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/path/:slug",
        element: <Post />,
      },

    ]
    
  },  
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
