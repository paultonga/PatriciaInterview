import { takeEvery, takeLatest, call, fork, put } from "redux-saga/effects";
import {
  signUp,
  signIn,
  facebookLogin,
  googleLogin,
} from "../services/AuthService";
import { Types } from "./actions";
import * as NavigationService from "../navigation/NavigationService";

function* emailSignUp({ payload }) {
  const { email, password, name } = payload;
  try {
    const response = yield signUp(email, password, name);
    if (response.code) {
      yield put({ type: Types.ERROR, payload: { error: response.messge } });
    } else {
      const user = {
        name: response.name,
        email: response.email,
      };
      yield put({
        type: Types.SUCCESS,
        payload: { token: response.objectId, user },
      });
      yield NavigationService.navigate("DashboardScreen");
    }
  } catch (error) {
    yield put({ type: Types.ERROR, payload: { error } });
  }
}

function* emailSignIn({ payload }) {
  const { email, password } = payload;
  try {
    const response = yield signIn(email, password);
    if (response.code) {
      yield put({ type: Types.ERROR, payload: { error: response.message } });
    } else {
      const user = {
        name: response.name,
        email: response.email,
      };
      yield put({
        type: Types.SUCCESS,
        payload: { token: response.objectId, user },
      });

      yield NavigationService.reset({
        routes: [{ name: "DashboardScreen" }],
      });
    }
  } catch (error) {
    yield put({ type: Types.ERROR, payload: { error } });
  }
}

function* facebook() {
  try {
    const response = yield facebookLogin();
    if (response.error) {
      yield put({ type: Types.ERROR, payload: { error: response.error } });
    } else {
      const { user, token } = response;
      yield put({ type: Types.SUCCESS, payload: { token, user } });

      yield NavigationService.reset({
        routes: [{ name: "DashboardScreen" }],
      });
    }
  } catch (error) {
    yield put({ type: Types.ERROR, payload: { error } });
  }
}

function* google() {
  try {
    const response = yield googleLogin();
    if (response.error || !response.token) {
      const err = response.error || "Could not complete your request."
      yield put({ type: Types.ERROR, payload: { error: err } });
    } else {
      const { user, token } = response;
      yield put({ type: Types.SUCCESS, payload: { token, user } });

      yield NavigationService.reset({
        routes: [{ name: "DashboardScreen" }],
      });
    }
  } catch (error) {
    yield put({ type: Types.ERROR, payload: { error } });
  }
}

function* watchEmailSignUp() {
  yield takeLatest(Types.EMAIL_SIGNUP, emailSignUp);
}

function* watchFacebookLogin() {
  yield takeLatest(Types.FACEBOOK_SIGNIN, facebook);
}

function* watchGoogleLogin() {
    yield takeLatest(Types.GOOGLE_SIGNIN, google);
  }

function* watchEmailSignIn() {
  yield takeLatest(Types.EMAIL_SIGNIN, emailSignIn);
}

const AppSagas = [
  fork(watchEmailSignIn),
  fork(watchEmailSignUp),
  fork(watchFacebookLogin),
  fork(watchGoogleLogin),
];

export default AppSagas;
