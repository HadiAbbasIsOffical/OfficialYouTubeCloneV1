const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    channelId: 'UCBVjMGOIkavEAhyqpxJ73Dw',
    part: 'snippet,id',
    order: 'date',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '319dd18cc2mshca394570618440dp1670bfjsna5a4575990b2',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export default async function GetChannelVid(IDof){
    options.params.channelId=IDof
try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data
} catch (error) {
	console.error(error);
}
}