import {Types} from './actions';

const INITIAL_STATE = {
  error: null,
  token: null,
  loading: false,
  user: {},
};


export default function AppReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.EMAIL_SIGNIN: {
            return {
                ...state,
                loading: true,
            };
        }

        case Types.EMAIL_SIGNUP: {
            return {
                ...state,
                loading: true,
            };
        }
        
        case Types.FACEBOOK_SIGNIN: {
            return {
                ...state,
                loading: true,
            };
        }

        case Types.GOOGLE_SIGNIN: {
            return {
                ...state,
                loading: true,
            };
        }

        case Types.SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.user,
            };
        }

        case Types.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }

        case Types.CLEAR_ERROR: {
            return INITIAL_STATE;
        }

        case Types.SIGN_OUT: {
            return INITIAL_STATE;
        }

        default: {
            return {
                ...state,
            }
        }
    };
};