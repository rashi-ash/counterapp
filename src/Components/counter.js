import React from "react";

function Counter(props){
    console.log(props.count)
    return(
        <h1 class="mt-5">Counter:{props.count}</h1>
    )
}
export default Counter