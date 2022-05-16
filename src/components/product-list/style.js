import styled from "styled-components";

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({bgColor})=> bgColor};
    width: 100%;
    max-width: 300px;
    height: 300px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 50px;
    position: relative;

    p{
        position: absolute;
        top: 0;
        font-size: 18px;
        color: white;
        background-color: black;
        padding: 5px;
        border-radius: 12px;
         
    }
   
`


export const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: blueviolet;
    color: white;
    height: 50px;
    list-style: none;
    margin: 5px 0;
    padding: 5px 15px;
    border-radius: 4px;
    width: 90%;
    box-sizing: border-box;
    button{
        padding: 10px;
        border-radius: 4px;
        background-color: rebeccapurple;
        border: none;
        font-size: 12px;
        color: white;
        margin-left: 10px;
    }

`