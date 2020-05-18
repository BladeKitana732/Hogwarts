import React from 'react';


function HeroInfo() {
    return(
        <React.Fragment>
        <div class ="parent">
            <ul class="children">
                <li>
                    <input className="username" placeholder="Username"></input>
                </li>
                <li>
                    <input className ="password" placeholder="Password"></input>
                </li>
                <li>
                    <input className="password1" placeholder="Confirm Password"></input>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default HeroInfo;