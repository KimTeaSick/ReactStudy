import React,{ Component } from 'react';

class Wordchain extends Component {
  state = {
    word: '김요셉',
    value: '',
    result: '',
  };

  onSubmitResult = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩댕동',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setStaet({
        result: '떙',
        value: '',
      });
      this.input.focus();
    }
  }
  onChangeInput = (e) => {
    this.setState({ value: e.target.value })
  }

  input;

  onRefInput = (c) => {
    this.input = c;
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitResult} >
          <input value={this.state.value} ref={this.onRefInput} onChange={this.onChangeInput} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

export default Wordchain;