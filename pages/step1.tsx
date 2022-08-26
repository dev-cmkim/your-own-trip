import { useEffect, useState } from "react"
import styled from "styled-components"
import { strings } from "../common/strings";
import SelectBoxMap from "../compoment/selectBoxMap";
import { GlobalStyle } from "../styles/globalStyle"


const Step1 = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        // Perform localStorage action
        const userName = localStorage.getItem('name')
        setUserName(userName ? userName : '');
    }, [])
    
    return (
        <div>
            <GlobalStyle />
            <main>
                <h1 className="title-text2"> {userName} {strings.question.place} </h1>
                <SelectBoxMap />
            </main>
        </div>
    )

}

export default Step1