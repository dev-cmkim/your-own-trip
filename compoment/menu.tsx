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

export default function Menu () {
    return(
        <main>
            <MenuBar>
                <nav>
                    <Link href="/">
                        <MenuItem>
                            <a>homess</a>
                        </MenuItem>
                    </Link>
                    <Link href="/about">
                        <MenuItem>
                            <a>about</a>
                        </MenuItem>
                    </Link>
                </nav>
            </MenuBar>
        </main>
    )
}
