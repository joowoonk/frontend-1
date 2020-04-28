import { css } from "styled-components";

export const fadedBlack = "rgba(0, 0, 0, 0.5)";
export const babySeal = "#709689";
export const aqua = "#7fffd4";
export const bangers = "Bangers, cursive";
export const button = css`
  font-size: 1rem;
  border-color: black;
  border-radius: 5px;
  outline: none;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: ${fadedBlack};
  }
`
