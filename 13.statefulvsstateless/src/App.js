import './App.css';
import { Child } from './Components/Child';
import React from 'react';

export default function App(props) {
  const [date] = React.useState(new Date());

  return (
    <div>
      <Child message = {date.toLocaleTimeString ()} />

    </div>
  );
}
