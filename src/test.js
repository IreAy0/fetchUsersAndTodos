
    const { isLoading, users, error, todos } = this.state;
    return (
      <>
      <Link to="/"> &larr; Go back home</Link>
        <h1>Random User</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          <>{
          users.map(user => {
            const { name, email,id} = user;
            return (
              <div key={id}>
                  <p>Email Address: {email}</p>
                <p> ID: {id}</p>
            <p>Name: {name}</p>
              {/* <p>{userId.title}</p> */}
                <button  onClick={() => this.fetchTodo(id)} >CLick
           </button>
           {/* {todos.map(todo => 
              {
               const {Completed, title, userId} = todo;
               return(
              
              <Todo  title={title} userId={userId} completed={Completed}/>
                   
              )
           
             }
             )
           } */}
            
           
                <hr />
              </div>
              <div>
              {todos.map(todo => 
              {
               const {Completed, title, userId} = todo;
               return(
              
              <Todo  title={title} userId={userId} completed={Completed}/>
                   
              )
           
             }
             )
           }
              </div>
              
            );
          })
  }) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

