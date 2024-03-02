import { useState } from "react"
import SignUp from "./SignUp"


function App() {
  const [res, setRes] = useState('');
  const apiCall = async () => {
    try {
      const response = await fetch("https://localhost:7275/User/GetUsers")
      const data = await response.json();
      setRes(data);
      // setRes(response);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <p>Hello World</p>
      <button onClick={apiCall}>Get Users</button>
      {res.length > 0 && res.map(user => <li key={user?.id}>{user?.name}</li>)}
    </>
  )
}

export default App
