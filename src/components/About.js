import React from "react";

function About (props) {
    console.log("This is about")
    console.log(props)
    return (
        <>
            <aside>
                {props.image && props.image.length >= 1 ? <img src = {props.image} alt = "blog logo"/>: 
                <img src ="https://via.placeholder.com/215" alt = "blog logo"/>}
                <p>{props.about}</p>
            </aside>
        </>
    )
};

export default About