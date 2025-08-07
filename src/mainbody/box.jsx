import { useState } from 'react';
import './box.css';
import video from '../assets/video.png'
import note from '../assets/note.png'
import book from '../assets/book.png'

function Box({ box }) {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    const updated = [...openSections];
    updated[index] = !updated[index];
    setOpenSections(updated);
  };

  return (
    // <div className="box_container">
    //   {box.map((label, index) => (
    //     <fieldset className="semester-container" key={index}>
    //       <legend className="title">{label.title}</legend>

    //       {label.body.map((body, index1) => (
    //         <div className="subjects-grid" key={index1}>
    //           <p className="para" onClick={() => toggleSection(`${index}-${index1}`)}>
    //             {body.head}
    //           </p>

    //           <div className="subject-box">
    //             <ul className={openSections[`${index}-${index1}`] ? "show" : ""}>
    //               {body.topic.map((nlabel, index2) => (
    //                 <li key={index2}><u>{nlabel.topicname}</u>
		// 								<br />
		// 								<div className="urls">
		// 									<a href={nlabel.youtube} target='_blank'><img src={video} alt="Youtube" className="youtube" /></a>
		// 									<a href={nlabel.notes} target='_blank'><img src={note} alt="Notes" className="notes" /></a>
		// 									<a href={nlabel.book} target='_blank'><img src={book} alt="Book" className="book" /></a>
		// 								</div>
		// 								</li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>
    //       ))}
    //     </fieldset>
    //   ))}
    // </div>
    <div className="box_container">
  {box.map((label, index) => {
    
    let content = null;

    if (label.title === 'Github Profiles') {
      content = (
        <div className="github-profiles">
          {label.body.map((body, bindex) =>
            body.topic.map((topic, tindex) => (
              <a href={topic.youtube} key={tindex} target="_blank" rel="noreferrer">
                <div className="profile">
                  <img src={topic.notes} alt="" /> {/*  change it  */}
                  <p>{topic.topicname}</p>
                </div>
              </a>
            ))
          )}
        </div>
      );
    } 
    else if (label.title === 'Projects') {
      content = label.body.map((body, index1) => (
        <div className="subjects-grid" key={index1}>
          <p className="para" onClick={() => toggleSection(`${index}-${index1}`)}>
            {body.head}
          </p>
          
          <div className="subject-box">
            <ul className={openSections[`${index}-${index1}`] ? "show" : ""}>
              {body.topic.map((nlabel, index2) => (
                <li key={index2}>
                  <u>{nlabel.topicname}</u>
                  <br />
                  <p>{nlabel.notes}<br></br>
                  <span className='place_a' style={{marginTop:'20px',display:'inline-block'}}><a href={nlabel.youtube} target='_blank'>Link</a></span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    } else if(label.title === 'Placement'){
      content = label.body.map((body, index1) => (
        <div className="subjects-grid" key={index1}>
          <p className="para" onClick={() => toggleSection(`${index}-${index1}`)}>
            {body.head}
          </p>

          <div className="subject-box">
            <ul className={openSections[`${index}-${index1}`] ? "show" : ""}>
              {body.topic.map((nlabel, index2) => (
                <li key={index2}>
                  <div className="urls" style={{justifyContent:'space-evenly'}}>
                    <a href={nlabel.youtube} target="_blank" rel="noreferrer">
                      <img src={video} alt="Youtube" className="youtube" />
                    </a>
                    <a href={nlabel.notes} target="_blank" rel="noreferrer">
                      <img src={note} alt="Notes" className="notes" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    }else if(label.title === 'Announcements'){
      content = label.body.map((body, index1) => (
        <div className="subjects-grid" key={index1}>
          <p className="para" onClick={() => toggleSection(`${index}-${index1}`)}>
            {body.head} - (new)
          </p>

          <div className="subject-box">
            <ul className={openSections[`${index}-${index1}`] ? "show" : ""}>
              {body.topic.map((nlabel, index2) => (
                <li key={index2}>
                  <div className="urls" style={{justifyContent:'space-evenly'}}>
                    <a href={nlabel.youtube} className='announcement' target='_blank'>{nlabel.topicname}</a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    }
    else {
      content = label.body.map((body, index1) => (
        <div className="subjects-grid" key={index1}>
          <p className="para" onClick={() => toggleSection(`${index}-${index1}`)}>
            {body.head}
          </p>

          <div className="subject-box">
            <ul className={openSections[`${index}-${index1}`] ? "show" : ""}>
              {body.topic.map((nlabel, index2) => (
                <li key={index2}>
                  <u>{nlabel.topicname}</u>
                  <br />
                  <div className="urls">
                    <a href={nlabel.youtube} target="_blank" rel="noreferrer">
                      <img src={video} alt="Youtube" className="youtube" />
                    </a>
                    <a href={nlabel.notes} target="_blank" rel="noreferrer">
                      <img src={note} alt="Notes" className="notes" />
                    </a>
                    {nlabel.book !== "" && (
                      <a href={nlabel.book} target="_blank" rel="noreferrer">
                        <img src={book} alt="Book" className="book" />
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ));
    }

    return (
      <fieldset className="semester-container" key={index}>
        <legend className="title">{label.title}</legend>
        {content}
      </fieldset>
    );
  })}
</div>
  );
}

export default Box;
