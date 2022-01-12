import React from 'react';
import { Message } from './Message';

export class MessagesPanel extends React.Component {
    state = { input_value: '' }
    send = () => {
        if (this.state.input_value && this.state.input_value != '') {
            this.props.onSendMessage(this.props.channel.id, this.state.input_value);
            this.setState({ input_value: '' });
        }
    }

    handleInput = e => {
        this.setState({ input_value: e.target.value });
    }

    render() {

        let list = <div className="no-content-message">There is no messages to show</div>;
        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
        }
        return (
            <div >
                <div>{list}</div>
                {this.props.channel &&
                    <div style={{backgroundColor:'green', width:300, height:50}}>
                        <input style={{height:'100%', width:'100%', backgroundColor:'#000'}} color="#000" type="text" onChange={this.handleInput} value={this.state.input_value} />
                        <button style={{borderColor:'#FFF', borderWidth:1, borderRadius:5, width:100, height:25}} onClick={this.send}>Send</button>
                    </div>
                }
            </div>);
    }

}