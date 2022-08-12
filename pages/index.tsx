import Link from "next/link"
import { useState } from "react"
import InputText from "../compoment/inputText"
import Menu from "../compoment/menu"
import { GlobalStyle } from "../styles/globalStyle"

const Home = () => {
    const [isHovering, setIsHovering ] = useState(0)
    return (
        <div >
            <GlobalStyle />
            <div className="init-main">
                <span className="title-text1">Your own trip : </span>
                {isHovering ? 
                <span className="title-text2"> 당신만의 여행</span> : ''
                }
                <InputText />
                <Link href="/about">
                    <button 
                    onMouseOver={() => setIsHovering(1)} 
                    onMouseOut={() => setIsHovering(0)}
                    className="btn-start">시작하기</button>
                </Link>
            </div>
        </div>
    )

}

export default Home