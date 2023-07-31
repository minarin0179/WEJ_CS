import axios from 'axios';

const dataTemp = {
    "collection": "characters",
    "database": "WEJ",
    "dataSource": "Cluster0",
}

const url = '/app/data-byzkt/endpoint/data/v1/action/insertOne'

const headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    'api-key': process.env.REACT_APP_DEV_API_KEY,
}

export const post = async (doc) => {
    const data = { ...dataTemp, document: doc };
    const res = await axios.post(url, data, { headers: headers })
    console.log(res.data);
}
