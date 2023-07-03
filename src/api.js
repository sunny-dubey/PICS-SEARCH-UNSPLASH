import axios from "axios";

const searchImages = async (term)=>{
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers:{
      Authorization: 'Client-ID VlN5EAeC-B3IwNo753lv0BuJV9wrTCiLKUkUN4Z2yVc'
    },
    params:{
      query: term,
    }
  })
  
  return response.data.results;
};

export default searchImages;