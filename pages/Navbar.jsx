import { Link } from "react-router-dom";




function Navbar(){
    return(
        <div style={{marginTop:"50px", textAlign:"center"}}>
            <Link to='/' style={{margin: '0px 15px'}}>Home</Link>
            <Link to='/about' style={{margin:'0px 15px'}}>About</Link>
            <Link to='/contact' style={{margin:'0px 15px'}}>Contact</Link>
        </div>
    )
}
export default  Navbar