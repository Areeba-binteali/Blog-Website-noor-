import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";


export default function Blogs (){
    return(
        <div className="blog2">
            <div className="sec">
                <div className="comp">
                    <p className="pap"><b>Travel Blog Made Easy</b></p>
                    <h1 className="heads">EVERYDAY URBAN CONCREATE JUNGLE</h1>
                    <p className="parg">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod<br /> tempor incididu nt ut labore et do dolore magna aliqua. Ut enim ad<br /> minim veniam, quis nostrud exerc itation ullamco laboris nisi... </p>
                    <button className="btt">VIEW MORE <MdOutlineArrowOutward className="icon2"/>
                    </button>
                </div>
                <div className="imgs">
                    <Image src="/images/post3.png" alt=""width={600} height={300}/>
                </div>
            </div>
            <div className="sec">
                <div className="comp">
                    <p className="pap"><b>Beautiful Designations Layout</b></p>
                    <h1 className="heads">CREATE DESIGNATION SHOWCASES</h1>
                    <p className="parg">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod<br /> tempor incididu nt ut labore et do dolore magna aliqua. Ut enim ad<br /> minim veniam, quis nostrud exerc itation ullamco laboris nisi... </p>
                    <button className="btt">VIEW MORE <MdOutlineArrowOutward  className="icon2"/>
                    </button>
                </div>
                <div className="imgs">
                    <Image src="/images/post2.png" alt=""width={600} height={300}/>
                </div>
            </div>
            <div className="sec">
                <div className="comp">
                    <p className="pap"><b>Stunning Shop Lists and Single</b></p>
                    <h1 className="heads">LAUNCH YOUR ONLINE STORE</h1>
                    <p className="parg">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod<br /> tempor incididu nt ut labore et do dolore magna aliqua. Ut enim ad<br /> minim veniam, quis nostrud exerc itation ullamco laboris nisi... </p>
                    <button className="btt">VIEW MORE <MdOutlineArrowOutward className="icon2"/>
                    </button>
                </div>
                <div className="imgs">
                    <Image src="/images/post1.png" alt=""width={600} height={300}/>
                </div>
            </div>
        </div>
    )
}