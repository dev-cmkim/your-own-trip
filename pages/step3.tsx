import React, { useEffect, useState } from 'react';
import { strings } from '../common/strings';
import SelectBoxView from '../compoment/SelectBoxView';
import { GlobalStyle } from '../styles/globalStyle';

const Step3 = () => {
    const [userName, setUserName] = useState('')
    const [myPlace, setMyPlace] = useState('')
    useEffect(() => {
        const userName = localStorage.getItem('name')
        setUserName(userName ? userName : '');

    }, [])

    return (
        <main>
            <GlobalStyle />
            <h1 className="title-text2"> {userName} {strings.question.viewAndMore} </h1>
            <SelectBoxView />
        </main>
    );
}

export default Step3;