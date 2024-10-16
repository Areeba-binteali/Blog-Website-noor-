import Link from 'next/link'
import Image from "next/image"
import { FaSearch } from "react-icons/fa";
export default function Header (){
    return(
        <div className="main">
            <div className="image">
                <Image src="/images/logo.png" alt="" width={200} height={300}/>
            </div>
            <div className="header">
                <ul className="menu">
                    <Link href={"/"} >
                    <li>Home</li>
                    </Link>
                    <Link href="">
                    <li>About</li>
                    </Link>
                    <Link href="">
                    <li>Contact</li>
                    </Link>
                    <Link href="">
                    <li>Services</li>
                    </Link>
                </ul>
            </div>
            <button className="button">Sign in</button><FaSearch  className="icons"/>
        </div>
        
    )
}
