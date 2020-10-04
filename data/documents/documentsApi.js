import axios from 'axios'
const END_POINT_FAQS = "https://chhr.afdb.org/wp-json/wp/v2/posts?categories=104&_embed"
const END_POINT_AFDB = "https://chhr.afdb.org/wp-json/wp/v2/posts"


// export async function getFaqs() {
    
//     // Rough implementation. Untested.
//     function timeout(ms, promise) {
//         return new Promise(function (resolve, reject) {
//             setTimeout(function () {
//                 reject(new Error("timeout"))
//             }, ms)
//             promise.then(resolve, reject)
//         })
//     }

//     timeout(5000, fetch(END_POINT_FAQS))
//         .then(function (response) {
//             console.log(response.data)
//             return response.data
//         })
//         .catch(function (error) {
//             console.log(error)
//         })

// }


export async function getFaqs() {
    try {
        let posts = await fetch(END_POINT_FAQS)
        let result = await posts.json()

        return result;
    } catch (error) {
        console.log(error)
    }
}



// export async function getBenefitPosts() {
//     try {
//       let posts = await fetch(END_POINT_BENEFITS)
//       let result = await posts.json()

//       return result

//     } catch (error) {
//   }
// }

export async function getAfDBPost(postId) {
    try {
        let posts = await fetch(`${END_POINT_AFDB}/${postId}`);
        let result = await posts.json();


        return result;
    } catch (error) {}
}
