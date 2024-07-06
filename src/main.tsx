import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
const graphQLURI = import.meta.env.VITE_graphQLURI;
const client = new ApolloClient({
  uri: graphQLURI,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>

    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ApolloProvider>
)
