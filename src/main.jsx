import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import router from './router'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryClient from './queryclient'
import AuthProvider from './contexts/AuthContext'
import {FavoritesProvider} from './contexts/FavoritesContext'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </FavoritesProvider>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
