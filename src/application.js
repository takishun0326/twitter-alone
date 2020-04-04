import React from 'react';

class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      icons: [],
      names: [],
      accounts: [],
      conttent: [],
      textArea: ''
    };
  }

  tweetArea = (t) => {
    this.setState({
      textArea: t.target.value
    });
  }

  render(){
    return(
      <div>
        <input type="textArea" onInput={this.tweetArea}/>
        <br>
        <button onClick={this.submitTweet}>送信</button>
    );
  }
}
