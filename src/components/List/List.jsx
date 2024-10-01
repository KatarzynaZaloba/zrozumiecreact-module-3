import { Item } from "../Item/Item.jsx";
import "./List.css";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

export function List() {
    return (
        <>
            <button onClick={() => alert(`Liczba emoji: ${emojis.length}`)}>
            Pokaż liczbę emoji
            </button>
            <ul className="list">
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji} />
                ))}
            </ul>
        </>

    );
}
