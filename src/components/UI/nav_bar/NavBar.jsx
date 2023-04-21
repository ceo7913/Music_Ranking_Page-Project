import React from 'react'
import { connect } from 'react-redux';
import { setSearchTerm } from '../../../redux/action/searchActions';
import { setSortType } from '../../../redux/action/sortActions';

const NavBar = ({ searchTerm, sortType, setSearchTerm, setSortType }) => {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSort = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div className='navFrame'>
        <input 
        className='navInput'
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        />
    </div>
  )
}

export default NavBar