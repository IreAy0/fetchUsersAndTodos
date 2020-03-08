import React from "react";
import "./App.css";
import {Link} from 'react-router-dom'
import Todo from './todo';

class userTodo extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
    todos:[] ,
  };
  fetchTodo =(id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
    .then(res => res.json())
    .then(datas => 
      this.setState({
        todos: datas 
      }))
      
  }

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
const {isLoading, users, error,todos} = this.state;
return (
  <>
  <Link to ='/'> &larr; Go back home</Link>
  {error ? <p>{error.message}</p>: null}
  {!isLoading ? (<div className="flex">
    <div >
    <h3>Users</h3>
    {users.map(user => {
      const {name, email, id} = user;
      return(
        
      
        <div className="users" key={id} onClick={() => this.fetchTodo(id)}> 
          Email- {email}, name - {name}, Id - {id}
          
        </div>
       
      )
    })
   
  }
  </div>
  <div>
  {
    
    todos.map(todo => {
      const {title, userId} = todo;
     
      return(
        
     
        <Todo title={title} userId={userId} />
        
      )
    })
  }
  </div>
  </div>):(
          <h3>Loading...</h3>
        ) }
  </>
)
  };
}
 export default userTodo;