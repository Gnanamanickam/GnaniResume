import React, { Suspense } from 'react';
import Lottie from 'react-lottie';
import Loading from './Loading'

const Animation = ({Data}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Data,
      };
    
    return (
        <Suspense fallback={<Loading />}>
          <div onClick={() => null}>
            <Lottie 
              options={defaultOptions}
            />
          </div>
        </Suspense>
    )
}
 
export default Animation;