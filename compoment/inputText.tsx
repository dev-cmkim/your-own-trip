import { useState } from "react";
import styled from "styled-components"

const Input = styled.input`
    text-align: center;
    outline: none;
    border: none;
    border-bottom-color: currentcolor;
    border-bottom-style: none;
    border-bottom-width: medium;
    border-bottom: 1px solid #ddd;
    width: 240px;
    margin: 0 auto;
    position: fixed;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    padding:10px;
`;

const InputText = () => {
    const [name, setName] = useState('')

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const userName = e.currentTarget.value;
        console.log(userName)

        setName(userName)

    }
    return (
        <div>
            <Input 
                type = "text" 
                placeholder= "이름을 입력해주세요."
                onChange={ handleChange }
            />                
        </div>
    )
}

export default InputText