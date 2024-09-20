import styled from "styled-components";

export const Button = styled.div`
    width: 65px;
    height: 65px;
    background-color: var(--neon-green);
    border-radius: 50px;
    position: absolute;
    left: 48%;
    bottom: 25%;
    padding: 14px;
    /* transform: translate(-50%, -50%); */

    &:hover{
        box-shadow: 2px 2px 10px 5px hsl(150, 52.439024390243915%, 67.84313725490196%);
    }
`