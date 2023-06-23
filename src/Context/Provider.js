import React, { useState } from 'react';
import ColorContext from './ColorContext';

let morning = {color: 'black', background: 'white', border: '1px solid blue', align: 'center'};

const Provider = (props) => {

    let [style, setStyle] = useState(morning);

    return (
        <ColorContext.Provider value= {
            {
                style: style,
                morning: () => setStyle(morning),
                twilight: () => setStyle({color: 'black', background: 'blue', border: '1px solid blue', align: 'left'}),
                night: () => setStyle({color: 'white', background: 'black', border: '1px solid blue', align: 'right'})
            }

        }>

        {props.children}

        </ColorContext.Provider>
    )
}
export default Provider;