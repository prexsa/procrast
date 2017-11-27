import axios from 'axios';

export function fetchGet(url) {
  return axios.get(url)
      .then(response => {
        //console.log('response: ', response)
        return response
      })
      .catch(err => {
        console.log('parsing failed: ', err)
      })
}