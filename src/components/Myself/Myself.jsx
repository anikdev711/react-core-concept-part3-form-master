/* eslint-disable react/prop-types */
import Special from "../Special/Special";


const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Myself;