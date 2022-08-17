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
        { id: 1, text: "SEOUL" },
        { id: 2, text: "GYEONGGI" },
        { id: 3, text: "BUSAN" },
        { id: 4, text: "JEJU" },
        { id: 5, text: "준비중" },
        { id: 6, text: "준비중" }
    ]
  
    const [activeId, setActiveId] = useState();
    const [btnActive, setBtnActive] = useState(false);

    return(
        <div>
        <Grid>
            {values.map((val:any) => (
             <Item onClick={(e:any) => {
                setActiveId(val.id)
                // localStorage.setItem('myPlace', val.text)
                setBtnActive(!btnActive)
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