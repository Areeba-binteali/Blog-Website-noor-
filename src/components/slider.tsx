import Image from "next/image"
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Slider(){
    return(
        <div className="slide">
            <Image src="/images/slide.jpg" alt="" width={1500} height={100}></Image>
            <div className="cont">
                <Image className="log" src="/images/logo1.png" alt="" width={200} height={100}></Image>
                <h1 className="slihead">PERFECT PLACE FOR YOUR STORIES</h1>
                <button className="bto">VIEW MORE <MdOutlineArrowOutward className="icon2"/></button>
            </div>  
         
        </div>
    )
}