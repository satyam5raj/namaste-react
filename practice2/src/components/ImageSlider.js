import React, { useEffect, useState } from 'react'
import { data } from './Constants';

const ImageSlider = () => {

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleNextClick = () => {
        setActiveImageIndex((activeImageIndex+1)%data.length)
    }

    const handlePreviousClick = () => {
        // if(activeImageIndex === 0) setActiveImageIndex(data.length-1)
        // else setActiveImageIndex(activeImageIndex-1)
        setActiveImageIndex(!activeImageIndex ? data.length-1 : activeImageIndex-1)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
                handleNextClick()
            }, 5000);
        return () => {
            clearTimeout(timer)
        }
    }, [activeImageIndex])

  return (
    <div className='flex justify-center my-10'>
        <button className='font-bold p-4 m-10' onClick={handlePreviousClick}>Previous</button>
        {data.map((url, i) => 
        <img key={url} src={url} alt='wallpaper' 
        className={'w-[700px] h-[500px] object-contain ' + (activeImageIndex === i ? "block": "hidden")}/>
        )}
        <button className='font-bold p-4 m-10' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default ImageSlider 