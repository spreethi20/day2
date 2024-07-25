import { useState } from "react";
function F11(){
    const [review,setreview]=useState("");
    const[submittedreview,setSubmittedreview]=useState("");
    const addReview=()=>{
        console.log("Adding review...");
        setSubmittedreview(review);
    }
    const inputValueChange=(event)=>{
        console.log(event.target.value);
        setreview(event.target.value);
        
    }
    return(
        <div>
            <input type="txt" placeholder="Enter a review"onChange={inputValueChange} value={review}/>
            <button className="btn btn-outline-dark" onClick={addReview}>Add review</button>

        </div>
    );
}
export default F11