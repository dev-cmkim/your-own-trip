import { useState } from "react";
import styled from "styled-components"

const Input = styled.input`
    text-align: center;
    outline: none;
    border: none;
    border-bottom: 2px solid #ddd;
    font-size:20px;
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
        // console.log(userName)

        setName(userName)
        localStorage.setItem('userName', userName)
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