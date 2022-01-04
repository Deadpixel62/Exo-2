import React from 'react'

function Menu(props) {
    return (
      <div>
        <h2>Cafe</h2>
        <div>
          {props.menu.map((ele) => {
            return <p>{ele}</p>;})}
        </div>
      </div>
    );
}

export default Menu
