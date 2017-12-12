import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
          <div className="Navbar">

            <div className="TopicList">
                <ul>
                    <li>Football</li>
                    <li>Cooking</li>
                    <li>etc</li>
                </ul>
            </div>

            <div className="Home">
                <p>GO HOME</p>
            </div>

            <div className="SortBy">
                <p>Sort By...</p>
            </div>
          
          </div>
        );  
    }
}

export default Navbar;