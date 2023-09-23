import { createContext } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'
import { useState } from "react";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <p>Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunt></Aunt>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;