/* eslint-disable react/prop-types */
import Cousine from "../Cousine/Cousine";


const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section>
                <Cousine name={'Rafsan'} asset={asset}></Cousine>
                <Cousine name={'Shohana'}></Cousine>
            </section>
        </div>
    );
};

export default Uncle;