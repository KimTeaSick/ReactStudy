import React,{ FC, useState } from "react";
import styled from "@emotion/styled";
import { setTodo } from "../module/todoSlice";
import { useAppDispatch, useAppSelector } from "../module";
const WriteWrapper = styled.div`
display:flex;
`
const WriteInput = styled.input`
width:280px;
height: 100px;
font-size:25px
border-radius:10px;
box-sizing: border-box;
`
const SendBtn = styled.button`
width:70px;
height:100px;
text-align:center;
color:white;
font-weight: bold;
border: none;
background: green;
`

const Write: FC = () => {

  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector( state => state.todo);
  const sendValue = () => {
    const _todoList = [...todoList, value]
    dispatch(setTodo(_todoList))
  }

  return(
    <WriteWrapper>
      <WriteInput value={value} onChange={ e =>{setValue(e.target.value)}} />
      <SendBtn onClick={sendValue}> SEND! </SendBtn>
    </WriteWrapper>
  )
}

export default Write;