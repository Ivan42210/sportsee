import './Sidebar.css'
import swim from '../../assets/icons/swimming.png'
import zen from '../../assets/icons/zen.png'
import muscles from '../../assets/icons/muscles.png'
import bicycle from '../../assets/icons/bicycle.png'

export default function SideBar(){
    return(
        <div className="sidebar text-light bg-dark">
            <section className='sidebar-icons'>
                <img src={zen} alt="" />
                <img src={swim} alt="" />
                <img src={bicycle} alt="" />
                <img src={muscles} alt="" />
            </section>
            <p className='text-light'>
            Copyright, SportSee 2020
            </p>
        </div>
    )
}