import style from '../styles/sideBar.module.css'
import { IoHomeOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import { RiPlayListFill } from "react-icons/ri";
import { FiMusic } from "react-icons/fi";
import { CgLoadbarSound } from "react-icons/cg"
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";
//
import logoImage from "../../public/pngwing.com (1).png";
import avatar from "../../public/IMG-20221018-WA0030.jpg";

export default function SideBar() {
  return (
    <>
     <div className={style.sideBar}>
         <div className={style.logo}>
            <img src={logoImage} alt="logo" />
            <h3>Api_Spotify</h3>
         </div>
         <nav className={style.navigation}>
            <ul>
                <li className={style.options} id={style.user}>
                    <img src={avatar} alt="User" />
                    <span>João Lucas</span>
                </li>
                <li className={style.options}><span><IoHomeOutline className={style.icon}/>Home</span></li>
                <li className={style.options}><span><GrFavorite className={style.icon}/>favorite</span></li>
                <li className={style.options}><span><RiPlayListFill className={style.icon}/>playlist</span></li>
                <li className={style.options}><span><FiMusic className={style.icon}/>following</span></li>
                <li className={style.options}><span><CgLoadbarSound className={style.icon}/>chats</span></li>
            </ul>
            <hr />
            <ul>
                <li className={style.options}><span><IoIosNotificationsOutline className={style.icon}/>notification</span></li>
                <li className={style.options}><span><AiOutlineHistory className={style.icon}/>History</span></li>
            </ul>
         </nav>
         <div className={style.btn}><button><span>Tornas-se Preminum</span></button></div>
     </div>
    </>
  )
}
