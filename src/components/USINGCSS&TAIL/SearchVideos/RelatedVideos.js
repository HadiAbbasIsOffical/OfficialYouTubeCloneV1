const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    relatedToVideoId: '7ghhRHRP6t4',
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export default async function RelatedVidFetch(IDgiven){
     options.params.relatedToVideoId=IDgiven
try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data
} catch (error) {
	console.error(error);
}
}