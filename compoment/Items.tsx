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
    const [place, setPlace] = useState('')
    const [concept, setConcept] = useState('')
    const [view, setView] = useState('')
    const res:any = []

    useEffect(() => {
        setUserName(localStorage.getItem('name') || '')
        setPlace(JSON.parse(localStorage.getItem('place') || '{}')[0].value)
        setConcept(JSON.parse(localStorage.getItem('concept') || '{}')[0].value)
        setView(JSON.parse(localStorage.getItem('view') || '{}')[0].value)

        switch(JSON.parse(localStorage.getItem('place')|| '{}')[0].type) {
            case 'A1': res.push({image : '서둘'})
                 break;
            case 'A2': res.push({image : '경기'})
                 break;
            case 'A3': console.log("부산")
                 break;
            case 'A4': console.log("제주")
                 break;
            case 'A5': console.log("강원도")
                 break;
        }
        
        switch(JSON.parse(localStorage.getItem('concept')|| '{}')[0].type) {
            case 'B1': res.push({image : '힐링'})
                 break;
            case 'B2': res.push({image : '액티비티'})
                 break;
            case 'B3': console.log("맛집투어")
                 break;
            case 'B4': console.log("호캉스")
                 break;
        }

        switch(JSON.parse(localStorage.getItem('view')|| '{}')[0].type) {
            case 'C1': console.log("숲")
                 break;
            case 'C2': console.log("바다/강")
                 break;
        }

        console.log(res)
    }, [])

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