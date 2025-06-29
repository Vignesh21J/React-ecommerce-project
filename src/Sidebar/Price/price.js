import "./price.css"
import Input from "../../components/input";

function Price({handleChange}) {
  return( 
    <>
      <div className="ml">
          <h2 className="sidebar-title price-title">Price</h2>

          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>

          {/* <Input />
          <Input />
          <Input />
          <Input /> */}

          <Input 
            handleChange={handleChange}
            value={50}
            title="$0 - $50"
            name="test2"
          />
          <Input 
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />
          <Input 
            handleChange={handleChange}
            value={150}
            title="Above $100"
            name="test2"
          />
      </div>
    </>
  );
}

export default Price;
