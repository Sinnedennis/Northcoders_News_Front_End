import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';

const logo = require('./logo.png');

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">

                <div className="Logo">
                    <img className="LogoImg" src={logo} />
                </div>

                <div className="Home">
                    <HomeIcon className="HomeIcon" size={70} color="red" />
                </div>


                <Link to='/home/1' >
                    <h1>
                        Northcoders News
                    </h1>
                </Link>

                <div className="TopicList">
                    <ul>
                        <button class="button" value="football">Football</button>
                        <button class="button" value="cooking">Cooking</button>
                        <button class="button" value="coding">Coding</button>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Navbar;