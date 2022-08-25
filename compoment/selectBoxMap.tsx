import React, { useState } from "react"
import { strings } from "../common/strings"
import styled from "styled-components"
import Link from "next/link"


const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 16px;
`
const Item = styled.div`
    text-align: center;
    line-height: 100px;
    border:2px solid #4a728f;
    background-color : #fff;
    color : #4a728f;
    &.on {
        background-color : #4a728f;
        color : #fff;
        transition: all ease 0.5s 0s;
    }
    &:hover{  
        background-color : #4a728f;
        color : #fff;
        transition: all ease 0.5s 0s;
    }
`
const SelectBoxMap = () => {   
    const values = [
        { id: 1, text: 'SEOUL', type: 'A1'},
        { id: 2, text: 'GYEONGGI', type:'A2'},
        { id: 3, text: 'BUSAN', type: 'A3' },
        { id: 4, text: 'JEJU', type: 'A4' },
        { id: 5, text: 'GANGWON', type: 'A5' },
        { id: 6, text: '준비중', type: 'A6' }
    ]
  
    const [activeId, setActiveId] = useState();
    const [btnActive, setBtnActive] = useState(false);

    return(
        <div>
        <Grid>
            {values.map((val:any) => (
             <Item onClick={(e:any) => {
                if (val.text != "준비중") {
                    setActiveId(val.id)
                    localStorage.setItem('place', JSON.stringify(val.text))
                    localStorage.setItem('typeA',JSON.stringify(val.type))
                    setBtnActive(true)
                }else {
                    alert("준비중 입니다..!")
                }
             }}
             className={`${activeId == val.id  && 'on'}`}
             //array 안에 있는 chiid 는 고유한 key 값을 가져야한다.
             key = {val.id}
             >
             {val.text}
             </Item>
            ))}
        </Grid>
        <Link href="/step2">
             {btnActive ? 
                <button className="btn-start">{strings.button.next}</button> : <button className="btn-disabled" disabled>{strings.button.next}</button>
             }
        </Link>
        </div>
    )
}

export default SelectBoxMap