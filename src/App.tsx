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

  console.log(data);

  return (
    <div>
      <Card />
    </div>
  )
}

export default App
