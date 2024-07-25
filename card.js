function Card(props){
    return(
        <div className="card" style={{width:'23rem'}}>
            <img src="peacock.jpg" alt='peacock' width={200}
            style={{border:'10px solid #FF000',borderRadius:'40px'}}/>
           <div className="card-body">
            <h1>{props.userFromArray}</h1>
            <h2>{props.user.col}</h2>
            <h2>{props.user.branch}</h2>
            <h2>{props.user.year}</h2>
            <button type="button" className="btn btn-primary">Connect</button>
            </div>
        </div>
    );
}
export default Card;