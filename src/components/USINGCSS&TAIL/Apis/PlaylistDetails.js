const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/playlists',
  params: {
    id: 'RDZiQo7nAkQHU',
    part: 'snippet'
  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export default async function PlayDetails(IDof){
    options.params.id=IDof

try {
	const response = await axios.request(options);
	console.log('checking plays',response.data.items);
    return response.data
} catch (error) {
	console.error(error);
}
}