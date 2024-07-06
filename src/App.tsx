import './App.css'
import { useQuery, gql } from '@apollo/client'
import Card from './components/Card'
function App() {

  const query = gql`
    query getBook {
          books {
           authorId
          title
  }

    }
  `

  const {data, loading} = useQuery(query);

if(loading) return(<div>Loading</div>)

  return (
    <div>
      <Card />
      {JSON.stringify(data)}
    </div>
  )
}

export default App
