import React, {  useRef, useState,useEffect } from 'react';

const rspCoord = {
  R: '0',
  S: '-142px',
  P: '-284px'
}
const scores = {
  S: 1,
  R: 0,
  P: -1,
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoord).find(function (v) {
    return v[1] === imgCoord;
  })[0];
};

const RSP = () => {
  let [result, setResult] = useState('');
  let [imgCoord, setImgCoord] = useState(rspCoord.R);
  let [score, setScore] = useState(0);
  const interval = useRef();

  useEffect(() => {
    interval.current = setInterval(changeHand, 100)
    return ()=>{
      clearInterval(interval.current);
    }
  }, [imgCoord]);

  const changeHand = () => {
    if (imgCoord === rspCoord.R) {

      setImgCoord(rspCoord.S)
      
    } else if (imgCoord === rspCoord.S) {

      setImgCoord(rspCoord.P)
      
    } else if (imgCoord === rspCoord.P) {

      setImgCoord(rspCoord.R)
      
    }
  }

  const onClickBtn = (choice) => () => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      
        setResult('비겼습니다.');
      
    } else if ([-1, 2].includes(diff)) {
        
          setResult('이겼습니다.');
          setScore((prevState) => prevState + 1);
        
    } else {
          setResult('졌습니다.');
          setScore((prevState) => prevState - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 100)
    }
      , 1000)
  };
  return (
    <>
      <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
      <div>
        <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
        <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
        <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  );

}

export default RSP;