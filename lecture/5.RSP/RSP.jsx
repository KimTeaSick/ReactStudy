import React, { Component } from 'react';

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
  return Object.entries(rspCoord).find(function(v) {
    return v[1] === imgCoord;
  })[0];
};

class RSP extends Component {
  state = {
    result: '',
    imgCoord: rspCoord.R,
    score: 0,
  };

  interval;

  componentDidMount() { //비동기 요청
    this.interval = setInterval(this.changeHand, 100)
  }

  componentWillUnmount() { //비동기 요청 정리
    clearInterval(this.interval);
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if (imgCoord === rspCoord.R) {
      this.setState({
        imgCoord: rspCoord.S,
      });
    } else if (imgCoord === rspCoord.S) {
      this.setState({
        imgCoord: rspCoord.P,
      });
    } else if (imgCoord === rspCoord.P) {
      this.setState({
        imgCoord: rspCoord.R,
      });
    }
  }

  onClickBtn = (choice) => () => {
    const {imgCoord} = this.state;
    clearInterval(this.interval);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if (diff === 0) {
      this.state({
        result: '비겼습니다.'
      });
    } else if ([-1, 2].includes(diff)) {
      this.setState((prevState) => {
        return {
          result: '이겼습니다.',
          score: prevState.score + 1,
        }
      });
    }else{
      this.setState((prevState) => {
        return {
          result: '졌습니다.',
          score: prevState.score - 1,
        };
      });
    }
    setTimeout(()=>{
      this.interval = setInterval(this.changeHand, 100)}
    , 1000)
  };

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }} />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
          <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
          <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RSP;