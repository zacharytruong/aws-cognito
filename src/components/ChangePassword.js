import { useState, useContext } from 'react';
import { AccountContext } from './Account';

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const {getSession} = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();

    getSession().then(({user}) => {
      user.changePassword(currentPassword, newPassword, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results)
        }
      })
    })
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="current-password">Current password</label>
          <input
            value={currentPassword}
            type="text"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="new-password">New password</label>
          <input
            value={newPassword}
            type="text"
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
