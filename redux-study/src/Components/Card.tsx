import React, { FC } from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
width:350px;
height:350px;
border-radius:10px;
border: solid 1px #dcdcdc;
`
export interface CardProps {
  cardContent: string[],
}

const Card: FC <CardProps> = ({ cardContent }) => {

  return (
    <CardWrapper>
      {cardContent}
    </CardWrapper>
  )
}

export default Card;