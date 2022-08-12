import { useState, useEffect } from "react"

import Link from  "next/link"
import styled from "styled-components"

const MenuBar = styled.div`
    width:100%;
    height:40px;
    background-color:blue;
    text-align:center
`; 

const MenuItem = styled.a`
    color:#fff;
    line-height:40px;
    margin : 0 20px;
`;


const Menu = () => {
    // Hydration error 대응 -> 페이지가 클라이언트에 마운트될 때 현재 테마를 사용하는 UI만 렌더링해야함, userEffect 사용
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <MenuBar>
            <nav>
                <Link href="/">
                    <MenuItem>
                        <a>home</a>
                    </MenuItem>
                </Link>
                <Link href="/about">
                    <MenuItem>
                        <a>about</a>
                    </MenuItem>
                </Link>
            </nav>
        </MenuBar>
    )
   
}


export default Menu