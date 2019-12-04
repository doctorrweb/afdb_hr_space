import axios from 'react-native-axios'

export const END_POINT_AUTH = "http://chhr-test.afdb.org/wp-json/jwt-auth/v1/token"
export const END_POINT_VALID_AUTH = "http://chhr-test.afdb.org/wp-json/jwt-auth/v1/token/validate"

export function Authentication({ username, password}) {
    axios.post(END_POINT_AUTH, {
        username,
        password
    }).then(response => {
        console.log(response)
    }).catch(error => {
        console.log(error)
    })
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