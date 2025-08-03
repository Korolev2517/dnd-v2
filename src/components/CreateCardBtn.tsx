import {useState} from "react";
import { Draggable } from "@hello-pangea/dnd";

import "../style/CreatCardBtn-style.css"
import {useDraggable} from "@dnd-kit/core";

export function CreateCardBtn() {
    const [cards, setCards] = useState<Card[]>([]);

    type Card = {
        id: number;
    }

    const handleClick = () => {
        setCards([...cards, { id: Date.now() }]);
    }

    function Draggeble(props: any) {
        const {attributes, listeners, setNodeRef, transform} = useDraggable({
            id: 'draggable,'
        });
    }

    return (
            <div>
                <button className='create-card-btn'
                        onClick={handleClick}>Create</button>
                {cards.map((card: Card) => (
                    <div key={card.id} className='card'></div>
                ))}
            </div>

    )
}

