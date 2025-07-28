import './header.css'
import logo from '../assets/logocrop.png'
import nightin from '../assets/nightmode.png'

function Header({toggleTheme}){
	return(
		<div className="header_container">
			<div className="header_inner_container">
				<img src={logo} alt="logo" className='logo' />
				<p>CSE - <span>COMMUNITY</span></p>
				<img src={nightin} alt="navbar" className='navbar' onClick={toggleTheme}/>
			</div>
		</div>
	)
}

export default Header;