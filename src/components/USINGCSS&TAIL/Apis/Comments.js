const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
  params: {
    part: 'snippet',
    videoId: '7ghhRHRP6t4',
    maxResults: '100'
  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export default async function FetchComments(ID){
    options.params.videoId=ID
try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data
} catch (error) {
	console.error(error);
}
}