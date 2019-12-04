//import axios from 'axios'
const END_POINT_BENEFITS = "http://chhr-test.afdb.org/wp-json/wp/v2/posts?categories=94&_embed"
//const END_POINT_BENEFITS = "https://chhr.afdb.org/wp-json/wp/v2/posts"

/*
export function getBenefitsPosts () {
    try {
        axios.get(END_POINT_BENEFITS).then(response => response);
    } catch (error) {
        console.log(error)
    }
} 
*/

export async function getBenefitPosts() {
  try {
    let posts = await fetch(END_POINT_BENEFITS)
    let result = await posts.json()

    return result

  } catch (error) {
    console.log(error)
  }
}