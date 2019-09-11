import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = (props) => {

    const [resources, setResources] = useState([]); 

const fetchResource = async() => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resource}`)
    setResources(response.data);
}

useEffect( () => {
fetchResource(props.resource)
}, [props.resource])

    return (
    <ul>{ resources.map(record => <li key={record.id}>{record.title}</li>) }</ul>
        )

}

export default ResourceList;