import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
        <InfinitySpin color="gray" />
    </div>
  )
}

export default Loader