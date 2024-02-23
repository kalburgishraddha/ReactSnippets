import React, {useState} from "react";

const UseStateDemo = () => {
    const [count,setCount] = useState(0);
    return(
      <div>
            <button id="click_me_add" name="click_me_add" onClick={() => setCount(count + 1)}>Click me to Add</button>
            <button id="click_me_subtract" name="click_me_subtract" onClick={() => count > 0 && setCount(count - 1)}>Click me to Subtract</button>
            <p>{count}</p>
        </div>
    );
}

export default UseStateDemo;