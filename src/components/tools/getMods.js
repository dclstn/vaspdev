import React, { Component } from 'react';



export class getMods extends Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };

    componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res }))
          .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/twitch/getMods?channel=Vasp')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message);
        const list = []
        body.forEach(element => {
            list.push(<li>{element}</li>)
        });
        return (<ul>{list}</ul>)
    };

    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/twitch/getMods', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        let json = JSON.parse(body);
        let list = []
        json.forEach(element => {
            list.push(<li>{element}</li>)
        });
        this.setState({ responseToPost: <ul>{list}</ul> });
      };
    
    render() {
        return (
            
            <div className="getMods">
                <form onSubmit={this.handleSubmit}>
                <p>
                    <strong>Post to Server:</strong>
                </p>
                <input
                    type="text"
                    value={this.state.post}
                    onChange={e => this.setState({ post: e.target.value })}
                />
                <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>
                
            </div>
        )
    }
}

export default getMods