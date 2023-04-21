import { faArrowDown, faArrowDownUpAcrossLine, faArrowDownUpLock, faArrowUp, faArrowsRotate, faArrowsUpDown, faGroupArrowsRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Sort = () => {
  return (
    <div className='sortFrame'>
        <div className='sortButton'>
            <FontAwesomeIcon icon={faArrowUp}/>
            <FontAwesomeIcon icon={faArrowDown}/>
        </div>
    </div>
  )
}

export default Sort