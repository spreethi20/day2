import { useEffect ,useState} from "react";
function F10(){
    //const count=0;
    const [count,setCount]= useState(1);
    useEffect(() => {
        //setCount(5);
        console.log("Use Effect is called");
    }, []);
    const increment = ()=>{
        if(count >0){
            setCount(count+1);
        }
    }
    const decrement = ()=>{
            setCount(count-1);
        }
        const btnAddtocart=()=>{
            setCount(1);
        }
    return(
        <div>
            {(count===0)?
            <button className="btn btn-dark"onClick={btnAddtocart}>Add to cart</button>
            :
            <div style={{display:'flex'}}>
            <button className="btn btn-dark"onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button className="btn btn-dark"onClick={increment}>+</button>
            </div>
            }
        </div>
    );
}
export default F10;