import { useContext, useState } from 'react';
import { AccountContext } from './Account';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log('Logged in!', data);
      })
      .catch((err) => {
        console.error('Failed to login', err);
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
