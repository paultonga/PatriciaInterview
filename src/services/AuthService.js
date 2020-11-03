import * as Facebook from "expo-facebook";
import * as Google from "expo-google-app-auth";

import {
  FB_APP_ID,
  GOOGLE_ANDROID_ID,
  GOOGLE_IOS_ID,
  APP_ID,
  REST_API_KEY,
} from "../utils/constants";

const AUTH_URL = `https://api.backendless.com/${APP_ID}/${REST_API_KEY}/users`;

export async function signUp(email, password, name) {
  const json = JSON.stringify({ email, password, name });

  const response = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    body: json,
  });
  return  await response.json();
}

export async function signIn(login, password) {
  const json = JSON.stringify({ login, password });

  const response = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    body: json,
  });
  return await response.json();
}

export async function facebookLogin() {
  try {
    const { token, type } = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID,
      {
        permissions: ['public_profile'],
      }
    );

    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`
    );
    const user = await response.json();

    const pictureResponse = await fetch(
      `https://graph.facebook.com/v8.0/${user.id}/picture?width=500&redirect=false&access_token=${token}`
    );
    const pictureOBject = await pictureResponse.json();
    const userObject = {
      ...user,
      photoUrl: pictureOBject.data.url,
    };

    return { type, token, user: userObject };
  } catch (e) {
    console.log(e);
    return { error: "Error processing your request." };
  }
}

export async function googleLogin() {
  try {
    const { type, accessToken, user } = await Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_ID,
      iosClientId: GOOGLE_IOS_ID,
    });

    return { type, token: accessToken, user };
  } catch (e) {
    return { error: e };
  }
}
