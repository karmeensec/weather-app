import React from 'react';
import {BeatLoader} from 'react-spinners';

const Loading = () => {
  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BeatLoader size={20} color={"#f1f5f9"} loading={false} />
    </div>
    
  );
}

export default Loading;
