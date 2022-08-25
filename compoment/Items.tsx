import { useEffect, useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    border: 1px solid blue;
`

const Item = styled.div`
    border: 1px solid red;
    margin: 10px;
    width:150px;
    height:150px;
`
const array = [];

const Items = () => {
    const [userName, setUserName] = useState('')
    let [place, setPlace] = useState('')
    let [concept, setConcept] = useState('')
    let [view, setView] = useState('')
    let [res , setRes] = useState('')

    useEffect(() => {
        const array = [];
        array.push(localStorage)
        // console.log(array[0].typeA)
        // console.log(array[0].typeB)
        // console.log(array[0].typeC)
        
        setUserName(array[0].userName)
        setPlace(array[0].place)
        setConcept(array[0].concept)
        setView(array[0].view)
        setRes(array)
    }, [])

    const placeArray = [];
    if (place = "SEOUL") {
        console.log("서울임")
    }
    
    return (
        <ItemWrap>
            <Item>
                fdkfjdkfjkdjkafd
            </Item>
            <Item>
                dfdfd
            </Item>
            <Item>
                dfdfd
            </Item>
        </ItemWrap>
    );
}

export default Items;