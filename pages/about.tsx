import { useState, useEffect } from "react"

import Menu from "../compoment/menu"
import { GlobalStyle } from "../styles/globalStyle"

const About = () => {
    // const [mounted, setMounted] = useState(false)

    // useEffect(()=> {
    //     setMounted(true)
    // }, [])

    // if (!mounted) {
    //     return null
    // }
    return (
        <div>
            <GlobalStyle/>
            <Menu />
            <div> this is menu</div>
        </div>
    )
}

export default About

