import React from 'react'


function Form(props) {

    





    return (
        <form onSubmit={props.handleSubmit}>
        <h2>Client</h2>
        <p>Je veux</p>
        <input value={props.value} onChange={props.handleChange} type="text" placeholder="Tapez votre commande" />
        <input type="submit" value="Demander"/>     
        </form>
    )
}

export default Form

  



