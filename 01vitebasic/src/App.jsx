import Chai from "./chai"

function App() {
  // const [count, setCount] = useState(0)
  const username = "Rugved Junghare"
  return (
    <>
    <h1> Vite | {username}</h1> 
    <Chai/>
    </>
    // {username} ye ek evaluated expression hai. Yaha hamne js nahi likhi hai evaluated js likhi hai
    // isme ek hi elem ko return kr sakte so if you want to return more than one things you can wrap it in `fragment` i.e `<>` `</>`
  )
}

export default App
