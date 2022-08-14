import React, { useEffect, useState } from 'react';
import { strings } from '../common/strings';
import SelectBoxType from '../compoment/selectBoxType';
import { GlobalStyle } from '../styles/globalStyle';

const step2 = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        // Perform localStorage action
        const userName = localStorage.getItem('userName')
        setUserName(userName ? userName : '');
    }, [])

    return (
        <main>
            <GlobalStyle />
            <h1 className="title-text2"> {userName} {strings.question.type} </h1>
            <SelectBoxType />
        </main>
    );
}

export default step2;