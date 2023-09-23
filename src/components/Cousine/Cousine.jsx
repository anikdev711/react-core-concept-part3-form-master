/* eslint-disable react/prop-types */

// import { useContext } from "react";
import Friend from "../Friend/Friend";
import Special from "../Special/Special";
// import { AssetContext } from "../Grandpa/Grandpa";


const Cousine = ({name, asset}) => {
    
    return (
        <div>
            <h3>Cousine</h3>
            <p>{name}</p>
            <section>
                {asset && <Special asset={asset}></Special>}
                {name === 'Rubaya' && <Friend></Friend>}
            </section>
        </div>
    );
};

export default Cousine;