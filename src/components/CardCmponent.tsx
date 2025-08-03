import '../style/Card-style.css'

type Card = {
    id: number;
}

export function CardComponent({ id }: Card) {
    return (
        <div className="card"
             key={id}>
        </div>
    )
}