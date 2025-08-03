import {useState} from "react";
import { CardComponent } from "./CardCmponent.tsx";

type Card = {
    id: number;
}

export function CreateCardBtn() {
    const [cards, setCards] = useState<Card[]>([]);

    const handleClick = () => {
        setCards([...cards, { id: Date.now() }]);
    }

    return (
        <div>
            <button className='create-card-btn'
                    onClick={handleClick}>
                Create
            </button>
            {cards.map((card: Card) => (
                <div key={card.id} className='card'></div>
            ))}
        </div>
    )
}

