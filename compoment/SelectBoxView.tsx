import React, { useState } from "react"
import { strings } from "../common/strings"
import styled from "styled-components"
import Link from "next/link"


const Grid = styled.div`
    display:grid;
    grid-template-columns: 1fㄱ;
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

const SelectBoxView = () => {
    const values = [
        { id: 1, text: '숲', type:'C1' },
        { id: 2, text: '바다/강', type: 'C2'}
    ]

    const [activeId, setActiveId] = useState();
    const [btnActive, setBtnActive] = useState(false);

    return(
        <div>
        <Grid>
            {values.map((val:any) => (
             <Item onClick={(e:any) => {
                setActiveId(val.id)
                localStorage.setItem('myView',JSON.stringify(val.text))
                localStorage.setItem('typeC',JSON.stringify(val.type))
                console.log(localStorage.getItem('myView'))
                setBtnActive(true)
             }}
             key = {val.id}
             className={`${activeId == val.id  && 'on'}`}>
             {val.text}
             </Item>
            ))}
        </Grid>
        <Link href="/step4">
            {btnActive ? 
                <button 
                className="btn-start">{strings.button.next}</button> : <button className="btn-disabled" disabled>{strings.button.next}</button>
             }
        </Link>
        </div>
    )


  
}

export default SelectBoxView