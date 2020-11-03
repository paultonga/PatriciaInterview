/**
 * Action Types
 */
export const Types = {
    EMAIL_SIGNIN: 'EMAIL_SIGNIN',
    EMAIL_SIGNUP: 'EMAIL_SIGNUP',
    GOOGLE_SIGNIN: 'GOOGLE_SIGNIN',
    FACEBOOK_SIGNIN: 'FACEBOOK_SIGNIN',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
    SIGN_OUT: 'SIGN_OUT',
    CLEAR_ERROR: 'CLEAR_ERROR',
};


/**
 * Actions for action-types
 */

export const emailSignIn = (payload) => ({
    type: Types.EMAIL_SIGNIN,
    payload
  });

  export const emailSignUp = (payload) => ({
    type: Types.EMAIL_SIGNUP,
    payload
  });

  export const googleSignIn = () => ({
    type: Types.GOOGLE_SIGNIN,
  });

  export const facebookSignIn = () => ({
    type: Types.FACEBOOK_SIGNIN,
  });

  export const signOut = () => ({
    type: Types.SIGN_OUT,
  });

  export const clearError = () => ({
    type: Types.CLEAR_ERROR,
  });