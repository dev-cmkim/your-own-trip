import Link from "next/link"
import { useEffect, useState } from "react"
import InputText from "../compoment/inputText"
import Menu from "../compoment/menu"
import { strings } from "../common/strings"
import { GlobalStyle } from "../styles/globalStyle"
import styled from "styled-components"

const BtnWrap = styled.div`
    position: relative;
    border: 1px solid red;
`

const Home = () => {
    const [isHovering, setIsHovering ] = useState(0)
    const [gubun, setGubun] = useState('N')

    useEffect(() => {
        // Perform localStorage action
        const data = localStorage
        console.log(data)

        if (data.length > 0 ) {
            setGubun('Y')
            console.log("이력있음")
        }else {
            console.log("이력없음")
        }
    }, [])

    console.log(gubun)
        
    return (
        <div>
            <GlobalStyle />
            <div className="init-main">
                <span className="title-text1">Your own trip : </span>
                {isHovering ? 
                <span className="title-text2"> 당신만의 여행</span> : ''
                }
                {!gubun ?
                <div>
                    <InputText />
                    <Link href="/step1">
                        <button 
                        onMouseOver={() => setIsHovering(1)} 
                        onMouseOut={() => setIsHovering(0)}
                        className="btn-start">{strings.button.start}</button>
                    </Link> 
                </div>
                    :
                <BtnWrap>
                    <Link href="/step4">
                        <button className="btn-start">{strings.button.beforeData}</button>
                    </Link>  
                    <Link href="/step1">
                        <button className="btn-restart">{strings.button.reStart}</button>
                    </Link> 
                </BtnWrap>
                }
            </div>
        </div>
    )

}

export default Home