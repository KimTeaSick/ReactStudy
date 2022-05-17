import React, { FC } from "react";
import { firstRecoil } from "../Atom";
import { useRecoilState } from "recoil";

const MainPage: FC = () => {
  const [first, setFirst] = useRecoilState(firstRecoil);
  return (
    <>
      <div>
          recoil: {first}
      </div>
    </>
  )
}

export default MainPage;