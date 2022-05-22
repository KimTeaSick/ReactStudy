import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
width:350px;
height:50px;
border-radius:10px;
border: solid 1px #dcdcdc;
`
export interface CardProps {
  children: ReactNode,
}

const Card: FC <CardProps> = ({ children }) => {

  return (
    <CardWrapper>
      {children}
    </CardWrapper>
  )
}

export default Card;