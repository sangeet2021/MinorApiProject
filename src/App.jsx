import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  
  const getUsers = async() => {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  },[])

  return (
    <>
      <h1>Github Users</h1>
      <div className="users">
        <div className="users-display">
        {users.map((currElm, index) => {
          return(
          
          <div className="users-card" key={index}>
            <div className="picture" >
              <img src={currElm.avatar_url} style={{height : "100px", width: "100px", borderRadius: "50%"}} alt="React Image" />
            </div>
            <div className="info">
              <h3>{currElm.login}</h3>
              <p>id: {currElm.id} </p>
              <p>type: {currElm.type} </p>
            </div>
          </div>
        
          )
        })}
        </div>
      </div>
      
      
    </>
  )
}

export default App
