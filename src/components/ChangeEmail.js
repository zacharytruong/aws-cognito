import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useContext, useState } from 'react';
import { AccountContext } from './Account';

export default function ChangeEmail() {
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');

  const { getSession, authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({
            Name: 'email',
            Value: newEmail
          })
        ];

        user.updateAttributes(attributes, (err, results) => {
          if (err) {
            console.error(err);
          } else {
            console.log(results);
          }
        });
      });
    });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="new-email">New email</label>
          <input
            value={newEmail}
            type="text"
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="current-password">Current password</label>
          <input
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
