import { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Account';

export default function Status() {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log('Session: ', session);
      setStatus(true);
    });
  });
  return (
    <div>
      {status ? <button onClick={logout}>Logout</button> : 'Please login'}
    </div>
  );
}
