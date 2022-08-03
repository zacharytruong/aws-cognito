import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_ACfwnycCB',
  ClientId: '1njs2d2ndo8h8nnqnh0o45btp4'
};

export default new CognitoUserPool(poolData)