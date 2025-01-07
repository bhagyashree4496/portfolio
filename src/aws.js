// src/CognitoService.js
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";

// Cognito User Pool configuration
const poolData = {
  UserPoolId: "ap-south-1_iCtCwMX39", // Your User Pool ID
  ClientId: "7pp00lj0nqb944mni0l48dgj46", // Your App Client ID
};

const userPool = new CognitoUserPool(poolData);

// Function to handle user sign-up
export const signUp = (phoneNumber, password, callback) => {
  const attributeList = [
    new CognitoUserAttribute({
      Name: "phone_number",
      Value: phoneNumber, // Must be in E.164 format, e.g., +1234567890
    }),
  ];

  userPool.signUp(phoneNumber, password, attributeList, null, callback);
};

// Function to confirm user sign-up with OTP
export const confirmSignUp = (phoneNumber, otp, callback) => {
  const userData = {
    Username: phoneNumber,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.confirmRegistration(otp, true, callback);
};

// Function to sign in the user
export const signIn = (phoneNumber, password, callback) => {
  const authenticationData = {
    Username: phoneNumber,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userData = {
    Username: phoneNumber,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      console.log("Sign-in successful:", result);
      callback(null, result);
    },
    onFailure: (err) => {
      console.error("Sign-in failed:", err);
      callback(err, null);
    },
    mfaRequired: (challengeName, challengeParameters) => {
      console.log("MFA required:", challengeName, challengeParameters);
      callback(null, { challengeName, challengeParameters });
    },
  });
};

// Function to confirm sign in with OTP
export const confirmSignIn = (cognitoUser, otp, callback) => {
  cognitoUser.sendMFACode(otp, {
    onSuccess: (result) => {
      console.log("Sign-in with OTP successful:", result);
      callback(null, result);
    },
    onFailure: (err) => {
      console.error("Error confirming OTP:", err);
      callback(err, null);
    },
  });
};
