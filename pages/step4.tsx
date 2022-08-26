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
        const localData = [];
        localData.push(localStorage)

        setUserName(localData[0].name)
        setPlace(localData[0].place)
        setConcept(localData[0].concept)
        setView(localData[0].view)

        console.log(localData[0].place.value)
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