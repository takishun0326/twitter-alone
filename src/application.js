import React from 'react';

export default class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      icons: [],
      names: [],
      accounts: [],
      contents: [],
      icon: '',
      name: '',
      account: '',
      textArea: ''
    };
  }
  iconArea = (t) => {
    this.setState({
      name: t.target.value
    });
  }

  nameArea = (t) => {
    this.setState({
      name: t.target.value
    });
  }

  tweetArea = (t) => {
    this.setState({
      textArea: t.target.value
    });
  }

  submitTweet = () => {
    const {icon,name,account,textArea} = this.state;
    if(icon !== null && name !== null && account !== null && textArea !==null){
      const {icons,names,accounts,contents} = this.state;
      this.setState({
        icons: [...icons,icon],
        names: [...names,name],
        accounts: [...account,account],
        countents: [...contents,textArea]
      });
    }
  }

  render(){
    return(
      <div class="container">
        <form class="tweet-form">
          <label class="input-wrapper">
            <span class="label">アイコン</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.iconArea}
              spellcheck="false"
              required/>
          </label>
          <label class="input-wrapper">
            <span class="label">ニックネーム</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.nameArea}
              spellcheck="false"
              required/>
          </label>
          <label class="input-wrapper">
            <span class="label">twitter(3chan)ID</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.idArea}
              spellcheck="false"
              required/>
          </label>
          <label class="input-wrapper">
            <span class="label"></span>
            <input
              type="textArea"
              placeholder="今日は何もない素晴らしい一日だった"
              onInput={this.tweetArea}
              spellcheck="false"
              required/>
          </label>
          <button onClick={this.submitTweet}>送信</button>
        </form>
      </div>);
  }
}
