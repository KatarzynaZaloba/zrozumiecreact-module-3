import {Item} from "../Item/Item.jsx";
import styled from "styled-components";
import {StyledButton} from "../styles/StyledButton.jsx";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 30px;
`;

export function List() {
    return (
        <>
            <StyledButton
                $margin={30}
                onClick={() => alert(`Liczba emoji: ${emojis.length}`)}
            >Pokaż liczbę emoji
            </StyledButton>
            <StyledList>
                {emojis.map((emoji) => (
                    <Item key={emoji} emoji={emoji}/>
                ))}
            </StyledList>
        </>

    );
}
