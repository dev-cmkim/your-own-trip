import { useEffect, useState } from "react";
import { strings } from "../common/strings";
import Items from "../compoment/Items";
import { GlobalStyle } from "../styles/globalStyle";


const Step4 = () => {
    const [userName, setUserName] = useState('')
    const [place, setPlace] = useState('')
    const [type, setType] = useState('')
    const [view, setView] = useState(null)

    const [res , setRes] = useState()

    useEffect(() => {
        const array = [];
        array.push(localStorage.getItem('typeA'))
        array.push(localStorage.getItem('typeB'))
        array.push(localStorage.getItem('typeC'))

        setRes(array)
    }, [])
    
    // console.log(res)
    console.log("blablabla")

    return (
        <div>
            <GlobalStyle />
                <main>
                <h1 className="title-text2"> {userName} {strings.question.success} </h1>
                <span>{place} 에서</span>
                <span>{type} 컨셉으로</span>
                <span>{view} 을 보고싶은 여행</span>
                <Items/>
            </main>
        </div>
    );
}

export default Step4;