import { SiBurgerking } from 'react-icons/si'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <SiBurgerking />
            </div>
            <nav>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/burgers'>Burgers</Link>
                <Link href='/reviews'>Reviews</Link>
            </nav>
        </header>
    )
}

export default Header