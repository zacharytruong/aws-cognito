import { useState } from 'react';
import UserPool from '../UserPool';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
