import './mainbody.css'
import Footer from './footer'
import Box from './box'
import Soon from './soon'
import resource from './resource.json'

function Mainbody(){

	const box_json = resource;


	return(
		<div className="main_container">
			<div className="main_inner_container">
				<div className="upper"></div>
				<div className="lower">
					
					<Box box={box_json}/>

					<Soon />

					<Footer />
					
				</div>
			</div>
		</div>
	)
}

export default Mainbody;