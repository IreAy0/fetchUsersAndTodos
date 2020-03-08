import React from "react";
import "./App.css";
import {Link} from 'react-router-dom'
import Todo from './todo';

class userTodo extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null,
    usersTodoID: ,
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
    const { isLoading, users, error, todos } = this.state;
    return (
      <>
      <Link to="/"> &larr; Go back home</Link>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { name, email,id} = user;
            return (
              <div key={id}>
                  <p>Email Address: {email}</p>
                <p> ID: {id}</p>
            <p>Name: {name}</p>
              {/* <p>{userId.title}</p> */}
                <button  onClick={() => this.fetchTodo(id)} >CLick
           </button>{
             todos.map(todo => 
              {
               const {Completed, title, userId} = todo;
               return(
              
              <Todo  title={title} userId={userId} completed={Completed}/>
                   
              )
           console.log(todo.title)
             }
             )
           }
            
           
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default userTodo;
