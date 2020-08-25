import React, { Component } from 'react';



export class getVips extends Component {
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
        const response = await fetch('/api/twitch/getVips?channel=Vasp')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message);
        const list = []
        body.forEach(element => {
            list.push(<li>{element}</li>)
        });
        return (<ul>{list}</ul>)
    };
    
    render() {
        return (
            
            <div className="getMods">
                <ul>
                    { this.state.response}
                </ul>
                
            </div>
        )
    }
}

export default getVips