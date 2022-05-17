import React, {FC} from "react";
import { firstRecoil } from "../Atom";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const TouchRecoil: FC = () => {
  const navi = useNavigate()
  const [first, setFirst] = useRecoilState(firstRecoil);

  return(
    <div>
      <input value={first} onChange={ e => { setFirst(e.target.value)}} />
      <button onClick={()=>{navi('/')}}> go Main </button>
    </div>
  )
}

export default TouchRecoil;