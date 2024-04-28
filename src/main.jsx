import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from "react-cookie";
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import { AuthProvider } from './context/authContext.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      networkMode: "always",
      refetchOnReconnect: true,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </CookiesProvider>
  </React.StrictMode>,
)
