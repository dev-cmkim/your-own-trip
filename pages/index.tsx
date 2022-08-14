import Link from "next/link"
import { useState } from "react"
import InputText from "../compoment/inputText"
import Menu from "../compoment/menu"
import { strings } from "../common/strings"
import { GlobalStyle } from "../styles/globalStyle"

const Home = () => {
    const [isHovering, setIsHovering ] = useState(0)
    return (
        <div>
            <GlobalStyle />
            <div className="init-main">
                <span className="title-text1">Your own trip : </span>
                {isHovering ? 
                <span className="title-text2"> 당신만의 여행</span> : ''
                }
                <InputText />
                <Link href="/step1">
                    <button 
                    onMouseOver={() => setIsHovering(1)} 
                    onMouseOut={() => setIsHovering(0)}
                    className="btn-start">{strings.button.start}</button>
                </Link>
            </div>
        </div>
    )

}

export default Home