import userLogo from '@/assets/user.png'
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-end gap-100 items-center mt-10'>
            <div>
                <ul  className='flex gap-4 text-xl'>
                    <li><NavLinks href="/">Home</NavLinks></li>
                    <li><NavLinks href="/about">About</NavLinks></li>
                    <li><NavLinks href='/career'>Career</NavLinks></li>
                </ul>
            </div>

            <div className='flex gap-4 items-center'>
                <Image src={userLogo} alt='This is the avatar of the user' width={50}  />
                <button className='btn btn-secondary px-7 font-bold text-black'>
                    <Link href='/login'>Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;