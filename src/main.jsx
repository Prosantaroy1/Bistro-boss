import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';
//
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-screen-xl mx-auto'>
         <React.StrictMode>  
           <AuthProvider>
             <QueryClientProvider client={queryClient}>
              <HelmetProvider>
                 <RouterProvider router={router} />
               </HelmetProvider>
              </QueryClientProvider>
           </AuthProvider>
         </React.StrictMode> 
  </div>,
)
