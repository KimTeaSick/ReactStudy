import styled from "@emotion/styled";
import React, { FC, ReactNode } from "react";
import Card from "../Components/Card";
import Write from "../Components/Write";
import { useAppSelector } from "../module";
import { useSelector } from "react-redux";

const MainWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const CardWrapper = styled.div`
display: flex;
flex-direction: column;
`

const Main: FC = () => {

  const { todoList } = useAppSelector(state => state.todo);

  return (
    <MainWrapper>
      <CardWrapper>
        {todoList.map((value, index) => <Card key={index}>{value}</Card>)}
      </CardWrapper>
      <Write />
    </MainWrapper>
  )
}

export default Main;