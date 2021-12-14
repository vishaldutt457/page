import React from 'react'

function FeedOption(props) {

    const   onTrigger = (event) => {
        props.firstCallback(event.target.mytext.value);
        event.preventDefault();
    }
  

    return (
        <div>
             <form onSubmit = {onTrigger}>
                <input type = "text" 
                name = "mytext" placeholder = "Enter Text"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
    )
}

export default FeedOption
