import Link from "next/link";
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    { icon: <FaGithub />, path: "https://github.com/yasssine07" },
    { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/yassine-jenhani-b0249421a" },
  ];


const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>

        } )}
        </div>
};

export default Social;