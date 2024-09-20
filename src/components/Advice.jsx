import styled from "styled-components";
import { Button } from "./Button";
import { useCallback, useEffect, useState } from "react";

const AdviceBg = styled.div`
    width: 540px;
    height: 325px;
    background: var(--dark-grayish-blue);
    border: none;
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    text-align: center;
    font-weight: 100;

`

const Title = styled.h3`
    color: var(--neon-green);
    text-transform: uppercase;
    font-size: 0.42rem;
    letter-spacing: 4px;
    font-weight: 100;
    text-align: center;
`

const Content = styled.h1`
    color: var(--light-cyan);
    font-size: 26px;
   
`

const Icon = styled.div`
    width: 100%;
`
const Advice=()=>{

    const [advice, setAdvice] = useState({})
    const [loading, setLoading] = useState(false)

    const getAdvice = useCallback(async () => {
        setLoading(true)
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json();
        setLoading(false)
        setAdvice(data.slip)
        // console.log(data)
    }, [])

    useEffect(()=> {
        getAdvice()
    }, [])

    return(
        <AdviceBg>
            <Title>Advice #{advice.id}</Title>
            <Content>{loading && "Loading..."}{advice.advice}</Content>
            <Icon><img src="images\pattern-divider-desktop.svg" alt="" /></Icon>
            <Button onClick={getAdvice}>
                <img src="images\icon-dice.svg" alt="" /></Button>
        </AdviceBg>
    )
}
export default Advice