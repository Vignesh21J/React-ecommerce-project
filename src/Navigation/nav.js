import {FiHeart} from 'react-icons/fi'
import {AiOutlineShoppingCart, AiOutlineUserAdd, AiPOutlineShoppingCart, AiPOutlineUserAdd} from 'react-icons/ai'

import "./nav.css"

function Nav({ query, handleInputChange }) {
  return <nav>

    <div className="nav-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter your search"
        value={query} // Ensure the value is tied to the query state
        onChange={handleInputChange} // Trigger the handleInputChange function on user input
      />
    </div>

    <div className="profile-container">
      <a href="#">
        <FiHeart className='nav-icons' />
      </a>

      <a href="#">
        <AiOutlineShoppingCart className='nav-icons' />
      </a>

      <a href="#">
        <AiOutlineUserAdd className='nav-icons' />
      </a>
    </div>

  </nav>
}

export default Nav;
