import React, { useRef, useState } from 'react';

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMassage] = useState('클릭해서 시작하세여');
  const [result, setResult] = useState([]);
  let timeout =useRef(null);
  let startTime=useRef(0);
  let endTime=useRef(0);

  const onClickScreen = () => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMassage('지금누르세요');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
      setState('ready');
      setMassage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') {//성급하게 눌렸을 때
      clearTimeout(timeout.current);
      setState('waiting');
      setMassage('너무 빨랐어요');
    } else if (state === 'now') { //반응속도 체크
      endTime.current = new Date();
      setResult((prevState) => {
        return [...prevState, endTime.current - startTime.current]
      });
      setState('waiting');
      setMassage('클릭해서 시작하세요')
    };
  }

  const ResetBtn = () => {
    setResult([]);
  }

    return (
      <>
        <div
          id="screen"
          className={state}
          onClick={onClickScreen}>
          {message}
        </div>
        {result.length === 0 ? null : <div>평균시간 {result.reduce((a, c) => a + c) / result.length}ms</div>}
        <button onClick={ResetBtn}>Reset</button>
      </>
    )
}

export default ResponseCheck;