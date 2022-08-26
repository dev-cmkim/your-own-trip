import Link from "next/link"
import { useEffect, useState } from "react"
import InputText from "../compoment/inputText"
import Menu from "../compoment/menu"
import { strings } from "../common/strings"
import { GlobalStyle } from "../styles/globalStyle"
import styled from "styled-components"

const BtnWrap = styled.div`
    position: fixed;
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
    display:flex;
`

const Button = styled.button`
    width: 120px;
    height: 40px;
    background-color: #4a728f;
    border: 2px solid #4a728f;
    color:#fff;
    font-size: 20px;
    font-weight: bold;
    outline:none;
    border:none;
    border-radius:20px;
    margin: 0 10px;
`

const Home = () => {
    const [isHovering, setIsHovering ] = useState(0)
    const [gubun, setGubun] = useState(false)
    const name:any = []

    useEffect(() => {
        // Perform localStorage action
        const data = localStorage
        console.log(data)

        if (data.length > 0 ) {
            setGubun(!gubun)
            console.log("이력있음")
        }else {
            console.log("이력없음")
        }
    }, [])

    console.log(gubun)

    const saveName = () => {
        name.push(localStorage.getItem('userName'))
        localStorage.removeItem('userName')
        localStorage.setItem('name',name)
    }
        
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
                            onClick={ saveName }
                            className="btn-start">{strings.button.start}</button>
                        </Link> 
                    </div>
                :
                    <BtnWrap>
                        <Link href="/step4">
                            <Button className="btn-hover">{strings.button.beforeData}</Button>
                        </Link>  
                        <Button className="btn-hover" onClick={() => {
                            localStorage.clear()
                            setGubun(!gubun)
                            console.log("초기화 탕탕탕")
                        }}>{strings.button.reStart}
                        </Button>
                    </BtnWrap>
                }
            </div>
        </div>
    )

}

export default Home