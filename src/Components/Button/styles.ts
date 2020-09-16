import styled from 'styled-components'


export interface BtnProps  {
  background : '#FF8B8B' | '#9DDADB'
  textcolor : string
}


export const ButtonContainer = styled.button<BtnProps>`
    width : 260px;
    display: flex;
    padding: 5px 10px;
    align-items : center;
    justify-contnet: space-evenly;
    background-color : ${props => props.background};
    color: ${props => props.textcolor};
    border-radius: 30px;
    border : none;
    transition  : all 0.5s;
    cursor : pointer;
    img {
      height : 40px;
    }
    span {
      width : 100%;
      font-size : 20px;
      font-weight : 500;
    }
    &:hover {
      opacity : 0.8;
      width : 280px;
    }
    &:focus {
      outline : none;
    }
`