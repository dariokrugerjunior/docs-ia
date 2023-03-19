import axios from 'axios';
const URL_API = 'http://localhost:5001/api/prompt'


export const makeRequest = async (message) => {
  const {data} = await axios.post(URL_API, message)
  return data
}

export const getAllObjects = async () => {
  const {data} = await axios.get('http://localhost:5001/api/objects')
  return data
}

export const getObjectDescription = async (objectName) => {
  const objects = await getAllObjects();
  const object = objects.find(obj => obj.name === objectName);
  if (object) {
    return object.description;
  } else {
    return `O objeto ${objectName} não foi encontrado.`;
  }
}

