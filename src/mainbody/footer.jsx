import './footer.css'

function Footer(){

	const year = new Date().getFullYear();

	const email = "codeminestartup@gmail.com";

	function openGmailWithRecipient() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  window.open(gmailUrl, '_blank');
	}

	function openAuthor(){
		const url = "https://aniketdwivedi.vercel.app"
		window.open(url,"_blank");
	}

	return(
		<div className="footer_container">
			<p className='vision'>Our vision is to become the one-stop hub for every computer science student seeking free, high-quality resources for placements and academics. We believe that no student should have to waste time searching across the internet for scattered materials. That’s why CodeMine brings everything together in one place — from placement preparation resources, quick-access cheat sheets, top GitHub profiles, curated books and videos, to GATE CSE content, previous year papers, and handwritten notes. Whether you're preparing for a job interview or a competitive exam, CodeMine ensures you have everything you need — fast, free, and hassle-free. Empowering students, simplifying learning — that’s the CodeMine way.</p>
			<p className='para'><u onClick={openAuthor}>About the Founder</u></p>
			<div className="footer_inner_container">
			<p>&copy; {year} CodeMine. All rights reserved. <br />For any disperancy mail us: <u onClick={openGmailWithRecipient}>{email}</u></p>
		</div>
		</div>
	)
}

export default Footer;