import './header.css';

function Header() {
    return (
        <div className="container-fluid header">
            <div className='container'>
                <div className='logo'>
                    <img src='https://picsum.photos/150/80'></img>
                </div>
                <div className='nav'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contacts</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
