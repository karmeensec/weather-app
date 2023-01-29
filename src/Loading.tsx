import React from 'react';
import {BeatLoader} from 'react-spinners';


const Loading = ({loading}: {loading: boolean}):JSX.Element => {
  return (
    
    <div style={{ position: 'fixed', bottom: '0', left: '0', display: 'flex', alignItems: 'center', padding: '1rem', zIndex: '1000' }}>
      <BeatLoader size={20} color={"#f1f5f9"} loading={loading} />
    </div>
    
  );
}

export default Loading;
