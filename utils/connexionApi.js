import axios from 'react-native-axios'


export const END_POINT_CREATE_USER = "https://chhr-test.afdb.org/wp-json/wp/v2/users"

export const END_POINT_AUTH = "https://chhr-test.afdb.org/wp-json/jwt-auth/v1/token"
export const END_POINT_VALID_AUTH = "https://chhr-test.afdb.org/wp-json/jwt-auth/v1/token/validate"

export function Registration({ email, appName}) {
    axios
      .post(END_POINT_CREATE_USER, {
        email,
        appName
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
}

export function Authentication({ username, password }) {
  axios
    .post(END_POINT_AUTH, {
      username,
      password
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

export async function connexion() {
    try {
        let token = await fetch(END_POINT_AUTH, {
          method: "POST",
          body: { username, password }
        });

        let result = await posts.json()

        return console.log(token);

    } catch (error) {
        console.log(error)
    }
}