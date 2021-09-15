import { FaShippingFast, FaHandHoldingUsd, FaDollarSign } from 'react-icons/fa';
import { ImCoinDollar } from 'react-icons/im';
import { FcFinePrint } from 'react-icons/fc';
import './css/ChooseUs.css'

function Box({box}) {
    return(
        <section className="box">
            <section className="box-icon">
                <box.icon />
            </section>
            <section className="box-name">
                {box.name}
            </section>
            <section className="box-desc">
                {box.description}
            </section>
        </section>
    );
}


export default function ChooseUs5() {

    const boxes = [
        {
            name: 'Free-shipping',
            icon: FaShippingFast,
            description: 'All purchases over 499 are eligible for free shipping'
        },
        {
            name: 'Easy Payments',
            icon: FaHandHoldingUsd,
            description: 'All payments are processed instantly over a secure payment protocol'
        },
        {
            name: 'Money-Back Gaurantee',
            icon: FaDollarSign,
            description: "If an item arrived damaged or you've changed your mind, you can send it back for a full refund"
        },
        {
            name: 'Finest Quality',
            icon: FcFinePrint,
            description: 'Designed to last, each of our products has been crafted with the finest materials.'
        }
    ];

    return(
        <section className="ChooseUs ChooseUs5">
            {boxes.map((box, index) => (
                <Box key={index} box={box} />
            ))}
        </section>
    );
};