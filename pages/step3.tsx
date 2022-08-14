import React, { useEffect, useState } from 'react';
import { strings } from '../common/strings';
import SelectBoxView from '../compoment/SelectBoxView';
import { GlobalStyle } from '../styles/globalStyle';

const step3 = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        const userName = localStorage.getItem('userName')
        setUserName(userName ? userName : '');
    }, [])

    return (
        <main>
            <GlobalStyle />
            <h1 className="title-text2"> {userName} {strings.question.view} </h1>
            <SelectBoxView />
        </main>
    );
}

export default step3;