import React from 'react';
import styles from './css/style.css'

export default class Application extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tweets : [],
      icon: '',
      name: '',
      account: '',
      textArea: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmitTweet = (event) => {
    event.preventDefault();
    this.setState({
      tweets: [...this.state.tweets,{
        icons: this.state.icon,
        names: this.state.name,
        accounts: this.state.account,
        contents: this.state.textArea,
      }],
      icon : '',
      name : '',
      account : '',
      textArea : ''
    });
  }




  render(){

    return(
      <div className="container">
          <label className="input-wrapper">
            <span className="label">アイコン</span>
            <input
              type="text"
              name="icon"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              spellCheck="false"
              value={this.state.icon}/>
          </label>
          <label className="input-wrapper">
            <span className="label">ニックネーム</span>
            <input
              type="text"
              name="name"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              spellCheck="false"
              value={this.state.name}/>
          </label>
          <label className="input-wrapper">
            <span className="label">twitter(3chan)ID</span>
            <input
              type="text"
              name="account"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              spellCheck="false"
              value={this.state.account}/>
          </label>
          <label className="input-wrapper">
            <span className="label"></span>
            <input
              type="text"
              name="textArea"
              placeholder="今日は何もない素晴らしい一日だった"
              onChange={this.handleChange}
              spellCheck="false"
              value={this.state.textArea}/>
          </label>
          <button onClick={this.handleSubmitTweet}>送信</button>

          {this.state.tweets.map((tweets) => (<div key={tweets.accounts}>
              <div className="tweet">
                <div className="icon-container"　key={tweets.accounts}>{tweets.icons}</div>
                <div className="body-container"　key={tweets.accounts}>
                  <div className="status-display"　key={tweets.accounts}>
                    <span className="display-name"　key={tweets.accounts}>{tweets.names}</span>
                    <span className="account-name"　key={tweets.accounts}>@{tweets.accounts}</span>
                  </div>
                <div className="content"　key={tweets.accounts}>{tweets.contents}</div>
                </div>
              </div>
            </div>
          ))}
      </div>);
  }
}
