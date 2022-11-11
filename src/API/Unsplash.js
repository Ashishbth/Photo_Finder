import axios from 'axios';

export default axios.create(
    {
        baseURL :'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID -IXgak3LVL1MKxtS2y3INB_qpPkLqXTIsrRnU0Kvs1k'
        }
    }
);