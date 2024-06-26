
import axios from 'axios';
import { useEffect, useState } from 'react'


const API_KEY = "fiowVN9ZiBgnV8PZm6Vv2mYTLjRnDO0Q";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const usegif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setloading] = useState('false');

    async function fetchData(tag) {
        setloading(true);
        const { data } = await axios.get(url ? `${url}&tag=${tag}` : url);
        const imgUrl = data.data.images.downsized_large.url;
        setgif(imgUrl);
        setloading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, [])

    return { gif, loading, fetchData }
}

export default usegif
