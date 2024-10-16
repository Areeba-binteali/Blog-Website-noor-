import { url } from "inspector";
import Image from "next/image";

export default function Blog(){
    return(
        <div className="blogmain">
            <div className="sub" >
                <h1 className="h1">A Remarkable Homepage <br />Collection</h1>
                <p>Wanderland packs an assortment of fully customizable homes you can use <br />to share your travel experiences & adventures with the world.</p>
            </div>
            <div className="blog">
                <div className="blogs">
                    <Image src="/images/img1.jpg" alt=""width={400} height={300}/>
                    <h1 className="head">MAIN HOME</h1>
                </div>
                <div className="blogs">
                    <Image src="/images/img2.jpg" alt=""width={400} height={300}/>
                    <h1 className="head">ALTERNATING POSTS</h1>
                </div>
                <div className="blogs">
                    <Image src="/images/img3.jpg" alt=""width={400} height={300}/>
                    <h1 className="head">TRAVELLOGUE HOME</h1>
                </div>
            </div>
        </div>
    )
}