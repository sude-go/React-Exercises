import {useState} from'react';
import './App.css';


export default function RegisterForm(){
  const [form, setForm] = useState({
    firstName: 'Your Name',
    lastName:  'Your Lastname',
    email: 'youremail@example.com',
  });
  return(
    <>
  
    <label>
      First Name:
      <input value={form.firstName}
      onChange={e => {setForm({...form, firstName: e.target.value});
      }}/>
    </label><br></br>


    <label>
      Last name:
      <input value={form.lastName} 
      onChange = {e => {setForm({...form, lastName: e.target.value});
      }} />

    </label><br></br>

    <label>
      E-mail:
      <input value={form.email}
      onChange = {e => {setForm({...form, email: e.target.value});
    }} />
    </label>

    <p>
      {form.firstName}{' '}
      {form.lastName}{' '}
      ({form.email})
    </p>

    </>
  )
};


