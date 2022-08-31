import Footer from "./Footer"
import Navigationbar from "./Navbar"




const Layout=({children})=>{
    return(
        <>
            <Navigationbar/>
                { children }  
            <Footer/>
        </>
    )
}

export default Layout