import React, { useState } from 'react';
import ResourceList from './ResourceList';


const App = () => {

  //useState hook  --> [] = destructured array
  // const ['currentValue, setCurrentValue] = useState (initialValue)   -- initialValue = starting value for piece of state similar to when initilizing state object  -- resource is same is this.state.resource
const [resource, setResource] = useState('Posts');  

  return (
    <div className="App">
      <div>
      <button onClick={() => setResource('posts')}>Posts</button>
      <button onClick={() => setResource('todos')}>ToDo's</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

export default App;
