import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import {hSeoul1, hSeoul2, hSeoul3} from '../assets/images';

const ItemWrap = styled.div`
    display:grid;
    // grid-template-columns: 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
`

const Item = styled.div`
    border: 1px solid #ddd;
    box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 10px;
    margin: 10px;
    width:150px;
    text-align: center;
    padding: 6px;
`
const Title = styled.p`
    margin-top: 10px;
    font-size: 16px;
    font-weigh: bold;
`
const array = [];

const Items = () => {
    const [userName, setUserName] = useState('')
    const [place, setPlace] = useState('')
    const [concept, setConcept] = useState('')
    const [view, setView] = useState('')
    const seoulData:any = [
        {id :1 ,name : '숙소', img :hSeoul2, text: 'UH SUITE 서울'},
        {id: 2, name : '카페', img :hSeoul2, text: '서울 핫플 카페'},
        {id: 3, name : '볼거리', img :hSeoul2, text: '서울 볼거리'}
    ]
    // console.log(seoulData)

    useEffect(() => {
        setUserName(localStorage.getItem('name') || '')
        setPlace(JSON.parse(localStorage.getItem('place') || '{}')[0].value)
        setConcept(JSON.parse(localStorage.getItem('concept') || '{}')[0].value)
        setView(JSON.parse(localStorage.getItem('view') || '{}')[0].value)
    }, [])

    return (
        <ItemWrap>
            {seoulData.map((val:any) => (
                <Item key={val.id}>
                    <Image src={val.img} alt=""width="100%" height="100%" layout="responsive" objectFit="cover" />
                    <Title>{val.text}</Title>
                </Item> 
            ))}
        </ItemWrap>
    );
}

export default Items;