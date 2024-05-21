// import axios form 'axios'
import axios from 'axios'
const Base_URL='https://youtube-v31.p.rapidapi.com'
const options = {
    method: 'GET',
    url:Base_URL,
    params: {
      part: 'contentDetails,snippet,statistics',
      relatedToVideoId:'',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

  export const FetchVideos2=async(URL)=>{
    const {data}=await axios.get(`${Base_URL}/${URL}`,options)

    return data;
  }