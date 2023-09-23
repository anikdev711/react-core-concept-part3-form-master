import { useContext } from "react";
import Cousine from "../Cousine/Cousine";
import { MoneyContext } from "../Grandpa/Grandpa";


const Aunt = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Aunt</h3>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money+1000)}>Add money</button>
            <section>
                <Cousine name={'Mamshad'}></Cousine>
                <Cousine name={'Rubaya'}></Cousine>
            </section>
        </div>
    );
};

export default Aunt;