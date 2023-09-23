/* eslint-disable react/prop-types */
import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Dad = ({asset}) => {
    return (
        <div>
            <h3>Dad</h3>
            <section>
                <Myself asset={asset}></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;