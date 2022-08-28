import { useEffect, useState } from "react";
import { strings } from "../common/strings";
import Items from "../compoment/Items";
import { GlobalStyle } from "../styles/globalStyle";


const Step4 = () => {
    const [userName, setUserName] = useState('')
    const [place, setPlace] = useState('')
    const [concept, setConcept] = useState('')
    const [view, setView] = useState('')
    const res:any = []


    useEffect(() => {
        setUserName(localStorage.getItem('name') || '')
        setPlace(JSON.parse(localStorage.getItem('place') || '{}')[0].value)
        setConcept(JSON.parse(localStorage.getItem('concept') || '{}')[0].value)
        setView(JSON.parse(localStorage.getItem('view') || '{}')[0].value)

    }, [])
    

    return (
        <div>
            <GlobalStyle />
                <main>
                <h1 className="title-text2"> {userName} {strings.question.success} </h1>
                <span>{place} 에서</span>
                <span>{concept} 컨셉으로</span>
                <span>{view} 을 보고싶은 여행</span>
                <Items/>
            </main>
        </div>
    );
}

export default Step4;