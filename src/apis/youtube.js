import axios from 'axios';

const KEY = 'AIzaSyCpDHeByi_XppTCAaOupDmZkMxMO5vEWWQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

