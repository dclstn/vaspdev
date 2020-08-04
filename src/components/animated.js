import React, { Component } from 'react';
import Shape1 from '../components/images/shapes/1.png'
import Shape2 from '../components/images/shapes/2.png'
import Shape3 from '../components/images/shapes/3.png'
import Shape4 from '../components/images/shapes/4.png'
import Shape5 from '../components/images/shapes/5.png'

export class AnimatedBG extends Component {
    
    render() {
        return (
            
            <div class="box">
                <div><img src={ Shape1 } alt="Shape"></img></div>
                <div><img src={ Shape2 } alt="Shape"></img></div>
                <div><img src={ Shape3 } alt="Shape"></img></div>
                <div><img src={ Shape4 } alt="Shape"></img></div>
                <div><img src={ Shape5 } alt="Shape"></img></div>
                <div><img src={ Shape1 } alt="Shape"></img></div>
                <div><img src={ Shape2 } alt="Shape"></img></div>
                <div><img src={ Shape3 } alt="Shape"></img></div>
                <div><img src={ Shape4 } alt="Shape"></img></div>
                <div><img src={ Shape5 } alt="Shape"></img></div>
            </div>
        )
    }
}

export default AnimatedBG