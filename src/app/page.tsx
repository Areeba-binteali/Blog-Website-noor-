import Image from "next/image";
import Header from "../components/header";
import Blog from "../components/blogs";
import Blogs from "../components/blog2";
import Slider from "../components/slider"
import "./globals.css";

export default function Home() {
  return (
    <div className="block1">
      <div>
        <Header />
      </div>
      <div>
      <Slider/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
      <Blogs/>
      </div>
    </div>
  );
}
