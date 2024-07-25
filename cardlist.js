import Card from "./card";
function CardListUI(){
    const name="ReactJS";
    const college="SVECW";
    const userObject={name:'Preethi',branch:'AIDS',year:'4'}
    const users=['Scott Ayres','Richard Beeson','Jacob Hilpertsh','Stephanie Sweety','sarah Hacker','Curt Ziegier','Hannah recker','Michael Angiletta'];
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                users.map((user,index)=>(<Card key={index} program={name} col={college} user={userObject} userFromArray={user}/>))
            }
        </div>
    );

}
export default CardListUI