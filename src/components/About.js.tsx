import React from 'react';
import logo from '../assets/logo';

function About(props){
    return(
    <div>
            <aside>
                     <img>{props.image} {props.alt}
                </img>
                <p>{props.about}</p>
            </aside>
        </div>
    )
}
export default About;
