import { Link } from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <nav>
            <span className="Logo"><Link href='/' className='logo'>Veggis/Fruits</Link></span>
            <div>
                <Link className='Link' to='/user'>Home</Link>
                <Link className='Link' to='/place-order'>Cart</Link>
                <Link className='Link' to='/track-orders'>Track Order</Link>
            </div>
        </nav>
    )

}

const AdminNavbar = () => {
    return (
        <nav>
            <span className="Logo"><a href='/' className='logo'>Veggis/Fruits</a></span>
            <div>
                <Link className='Link' to='/admin'>Home</Link>
                <Link className='Link' to='/admin/add-product'>Add Product</Link>
                <Link className='Link' to='/admin/orders'>All Orders</Link>
            </div>
        </nav>
    )
}

export {Navbar,AdminNavbar}