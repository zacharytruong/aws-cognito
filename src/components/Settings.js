import { useEffect, useContext, useState } from 'react';
import { AccountContext } from './Account';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

export default function Settings() {
  const { getSession } = useContext(AccountContext);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    getSession().then(() => {
      setLoggedin(true);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {loggedin && (
        <>
          <h2>Settings</h2>
          <ChangePassword />
          <ChangeEmail />
        </>
      )}
    </div>
  );
}
