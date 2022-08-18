import { useEffect, useState } from "react";
import { strings } from "../common/strings";
import { GlobalStyle } from "../styles/globalStyle";


const Step4 = () => {
    const [userName, setUserName] = useState('')
    const [place, setPlace] = useState('')
    const [type, setType] = useState('')
    const [view, setView] = useState('')

    useEffect(() => {
        const userName = localStorage.getItem('userName')
        setUserName(userName ? userName : '');
        const place = localStorage.getItem('myPlace')
        setPlace(place ? place : '');
        const type = localStorage.getItem('myType')
        setType(type ? type : '');
        const view = localStorage.getItem('myView')
        setView(view ? view : '');

        console.log(localStorage)
    }, [])

    

    return (
        <div>
            <GlobalStyle />
                <main>
                <h1 className="title-text2"> {userName} {strings.question.success} </h1>
                <span>{place} 에서</span>
                <span>{type} 컨셉으로</span>
                <span>{view} 을 보고싶은 여행</span>
            </main>
        </div>
    );
}

export default Step4;