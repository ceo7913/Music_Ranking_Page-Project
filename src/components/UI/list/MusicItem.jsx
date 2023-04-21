import React from 'react'
import TestImage from "../../../images/testImage.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const MusicItem = () => {
  return (
    <div className='itemFrame'>
      <div className='testIamge'>
        <img src={TestImage} alt="TestImage"/>
      </div>
      <div className='text'>
        <div className='singer'>SINGER</div>
        <div className='songName'>SONGNAME</div>
        <div className='date'>DATE</div>
      </div>
      <div className='playButtonFrame'>
        <FontAwesomeIcon icon={faPlay}/>
      </div>
    </div>
  )
}

export default MusicItem