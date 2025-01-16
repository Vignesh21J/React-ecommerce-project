import Buttons from "../components/buttons";
import "./recommended.css"

function Recommended({handleClick}) {
  return <>
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">

        {/* <button className="btns">All Products</button> */}
        {/* <button className="btns">Adidas</button>
        <button className="btns">Puma</button>
        <button className="btns">Nike</button>
        <button className="btns">Vans</button> */}
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        {/* <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" /> */}
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />

      </div>
    </div>
  </>
}

export default Recommended;
