import React from 'react';

export default function todo(props) {
  return (
    <div>
    <p>{props.completed}</p>
      <p>{props.title}</p>
  <p>{props.userId}</p>
    </div>
  );
}
