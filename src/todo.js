import React from 'react';

export default function todo(props) {
  return (
    <div>
      
    <p>{props.completed} - {props.title} - {props.userId}</p>
     
    </div>
  );
}
