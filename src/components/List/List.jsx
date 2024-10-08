import {Item} from "../Item/Item.jsx";
import styled from "styled-components";

const emojis = ["🚀", "🎶", "🎁", "🎉", "✨"];

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 30px;
  padding: 30px;
`;
const StyledButton = styled.button`
  background: transparent;
  border: solid 1px;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  color: salmon;
  transition: background 0.3s;
  margin: 30px;

  &:hover {
    color: white;
    background: salmon;
  }
`;

export function List() {
    return (
        <>
            <StyledButton
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
