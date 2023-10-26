
import { CartWidget } from "../CartWidget/CartWidget"
import Style from "./NavBar.module.css"


export const NavBar = () => {
    return(
        <>
        <div className={Style.navBar}>
            <h1 className={Style.h1}> React Sneakers</h1>
            <div className={Style.btnbar}>
                <CartWidget />
                <p>0</p>
                <button className={Style.button}> inicio </button>
                <button className={Style.button}> productos</button>
                <button className={Style.button}> contacto</button>
            </div>
            
        </div>
        </>
        
    )
}