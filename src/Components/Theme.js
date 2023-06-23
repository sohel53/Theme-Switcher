import React, {useState, useContext} from "react";
import ColorContext from "../Context/ColorContext";

const Theme = () => {

    let {style, morning, twilight, night} = useContext(ColorContext)
    let [count, setCount] = useState(1)
    let [styleName, setStyleName] = useState("twilight")

    function changeStyle() {
        if (count == 1){
            twilight()
            setStyleName("night")
            setCount(count + 1)
        } else if (count == 2){
            night()
            setStyleName("morning")
            setCount(count + 1)
        } else {
            morning()
            setStyleName("twilight")
            setCount(1)
        }
    }

    return (
        <div>
            <h1 className="title">Switch the Theme</h1>
            <div style={{color: style.color, background: style.background, border: style.border, textAlign: style.align}}>
                <h1>Hi Mahebub</h1>
                <p>Working Software Developer</p>
                <button>Know More</button>
            </div>
            <br/><br/>
            <button className="btn" onClick={changeStyle}>{styleName}</button>
        </div>
    )
};

export default Theme;   