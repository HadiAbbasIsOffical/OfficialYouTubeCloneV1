const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/channels',
  params: {
    part: 'snippet,statistics',
    id: 'UCBVjMGOIkavEAhyqpxJ73Dw'
  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export default async function ProfilePicOnly(IDgiven){
    options.params.id=IDgiven;
try {
	const response = await axios.request(options);
    return(response.data.items[0].snippet.thumbnails.high.url)
} catch (error) {
	console.error(error);
}
}