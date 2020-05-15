import React from 'react'


function Hero() {
    return(
        <React.Fragment>
        <div class ="parent">
            <ul class="children">
                <li>
                    <input class="username" placeholder="Username"></input>
                </li>
                <li>
                    <input class ="password" placeholder="Password"></input>
                </li>
                <li>
                    <input class="password1" placeholder="Confirm Password"></input>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default Hero;