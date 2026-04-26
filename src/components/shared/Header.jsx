import { format } from "date-fns";
import logo from '@/assets/logo.png'
import Image from 'next/image';


const Header = () => {
    return (
        <div className='text-center py-10 space-y-5 text-[150%]'>
            <Image src={logo} alt='Logo of the website'className="w-150 mx-auto" priority/>
            <p>Journalism without Fear and Favour</p>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;