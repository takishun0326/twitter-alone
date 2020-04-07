import React from 'react';
import Tweets from './tweets';

export default class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      icon: '',
      name: '',
      account: '',
      textArea: ''
    };
  }
  iconArea = (t) => {
    this.setState({
      icon: t.target.value
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
    const hoge = new Tweets;
    const {icons,names,accounts,contents} = hoge.state;
    if(icon != null && name != null && account != null && textArea != null){
      hoge.setState({
        icons: [...icons,icon],
        names: [...names,name],
        accounts: [...account,account],
        countents: [...contents,textArea]
      });
    }
  }

  render(){
    return(
      <div className="container">
          <label className="input-wrapper">
            <span className="label">アイコン</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.iconArea}
              spellcheck="false"
              required/>
          </label>
          <label className="input-wrapper">
            <span className="label">ニックネーム</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.nameArea}
              spellcheck="false"
              required/>
          </label>
          <label className="input-wrapper">
            <span className="label">twitter(3chan)ID</span>
            <input
              type="text"
              placeholder="&nbsp;"
              onInput={this.idArea}
              spellcheck="false"
              required/>
          </label>
          <label className="input-wrapper">
            <span className="label"></span>
            <input
              type="textArea"
              placeholder="今日は何もない素晴らしい一日だった"
              onInput={this.tweetArea}
              spellcheck="false"
              required/>
          </label>
          <button onClick={this.submitTweet}>送信</button>
          <Tweets />
      </div>
    );
  }
}
