import './Nav.css';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Chat = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('email');
        navigate('/login');
    }
    return (
        <div className="nav">
            <Link to="/" className=' px-[4rem] font-bold text-3xl my-auto'><img className='w-[200px]'  src='favicon.ico'/></Link>

            <ul className='pl-8 flex justify-between w-[35%] my-auto'>
                {/* <li className='flex cursor-pointer'>Services0 <RiArrowDropDownLine className='m-auto text-3xl ' /></li> */}
                <Link to='/shopping' className='flex cursor-pointer'>Shopping</Link>
                <Link to='/application_option' className='flex cursor-pointer'>Application</Link>
                <Link to='/yoga' className='flex cursor-pointer'>Yoga</Link>
                <li className='flex cursor-pointer'>Contact</li>
            </ul>

            <div className="ml-auto my-auto pr-[6rem]">
                {!localStorage.getItem('email') ? (<>
                    <Link className={`link ${location.pathname === '/login' ? "active" : ""}`} to='/login'>Login</Link>
                    <Link className={`link ${location.pathname === '/signup' ? "active" : ""}`} to='/signup'>Signup</Link>
                </>)
                    :
                    (<h5 className="nav_logout" onClick={handleLogout}>Logout</h5>)}
            </div>

        </div>
    )
}

export default Chat;