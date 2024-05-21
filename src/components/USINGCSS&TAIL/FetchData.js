const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    part: 'id,snippet',
    maxResults: '50',
    q: 'java',

  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchNewApi=async(Given_Url)=>{
try {
  options.params.q=Given_Url
	const response = await axios.request(options);
	return(response.data)
} catch (error) {
	console.error(error);
}}