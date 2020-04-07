import React from 'react';

export default class Tweets extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      icons: ['〇'],
      names: ['takishun'],
      accounts: ['takishun_tetris'],
      contents: ['unko']
    };
  }

  tweet (i) {
    const {icons,names,accounts,contents} = this.state;
    return  <Showtweets iconValue={[icons[i]]} nameValue={[names[i]]} accountValue={[accounts[i]]} contentValue={[contents[i]]}/>;

  }

  render(){
    const {contents} = this.state;
    return (
      <div>
      {contents.map((hoge,index) => this.tweet(index))}

      </div>
    );
  }
}

function Showtweets(props){
  return(
    <div className="tweet">
      <div className="icon-container">{props.iconValue}</div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.nameValue}</span>
          <span className="account-name">@{props.accountValue}</span>
        </div>
        <div classNaqme="content">{props.contentValue}</div>
      </div>
    </div>
  );
}
