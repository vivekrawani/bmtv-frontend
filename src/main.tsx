import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: "http://127.0.0.1:8787",
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query GetLocations {
          books {
    authorId
    title
  }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
