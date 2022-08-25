import { useEffect, useState } from "react";
import { strings } from "../common/strings";
import Items from "../compoment/Items";
import { GlobalStyle } from "../styles/globalStyle";


const Step4 = () => {
    const [userName, setUserName] = useState('')
    const [place, setPlace] = useState('')
    const [concept, setConcept] = useState('')
    const [view, setView] = useState('')
    const [res , setRes] = useState('')

    useEffect(() => {
        const array = [];
        array.push(localStorage)
        
        setUserName(array[0].userName)
        setPlace(array[0].place)
        setConcept(array[0].concept)
        setView(array[0].view)
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