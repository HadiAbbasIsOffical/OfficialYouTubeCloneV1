// // import axios form 'axios'
// import axios from 'axios'
// const Base_URL='https://youtube-v31.p.rapidapi.com'
// const options = {
//     method: 'GET',
//     url:Base_URL,
//     params: {
//       part: 'snippet',
//       videoId: 'M7FIvfx5J10',
//       maxResults: '50'
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
  
//   try {
//       const response = await axios.request(options);
//       console.log(response.data);
//   } catch (error) {
//       console.error(error);
//   }

//   export const fetchFromAPI=async(URL)=>{
//     const {data}=await axios.get(`${Base_URL}/${URL}`,options)

//     return data;
//   }