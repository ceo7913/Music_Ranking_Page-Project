import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux';
import { setSearchTerm } from '../../../redux/action/searchActions';
import { setSortType } from '../../../redux/action/sortActions';

const Sort = ({ searchTerm, sortType, setSearchTerm, setSortType }) => {

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSort = (e) => {
    setSortType(e.target.value);
  };

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