import React, { useEffect, useState } from 'react';
import { strings } from '../common/strings';
import SelectBoxType from '../compoment/selectBoxType';
import { GlobalStyle } from '../styles/globalStyle';

const Step2 = () => {
    const [userName, setUserName] = useState('')
    useEffect(() => {
        // Perform localStorage action
        const userName = localStorage.getItem('name')
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

export default Step2;