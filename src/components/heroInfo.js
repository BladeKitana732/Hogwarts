import React from 'react';


function heroInfo() {
    return(
        <React.Fragment>
        <div class ="parent">
            <ul class="children">
                <li>
                    <input class="username" placeholder="Username">s</input>
                </li>
                <li>
                    <input class ="password" placeholder="Password">s</input>
                </li>
                <li>
                    <input class="password1" placeholder="Confirm Password">s</input>
                </li>
            </ul>
        </div>
        </React.Fragment>
    )
}

export default heroInfo;