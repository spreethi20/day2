import { useRef } from "react";
function F12(){
    const firstRef=useRef(null);
    const formSubmitted=(event)=>{
        event.preventDefault();//to prevent reftreshing every time
        console.log("Fom Submitted");
        console.log(firstRef.current.value);
        firstRef.current.value='';//to clear value
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default F12;