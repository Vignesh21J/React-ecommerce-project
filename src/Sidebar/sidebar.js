import Category from './Category/category'
import Price from './Price/price'
import Colors from './Colors/colors'

import "./sidebar.css"

function Sidebar({handleChange}) {
  // console.log(handleChange);
  return <>
    <section className="sidebar">
        
        <div className="logo-container">
          <img src="https://static.vecteezy.com/system/resources/previews/026/419/519/original/cart-logo-for-ecommerce-1-free-png.png" alt="logo" />
        </div>

        <Category handleChange = {handleChange} />
        <Price handleChange = {handleChange} />
        <Colors handleChange = {handleChange} />
    </section>
  </>
}

export default Sidebar;
