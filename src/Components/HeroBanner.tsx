import { useState } from "react";
import { FaFileDownload } from 'react-icons/fa';

function HeroBanner(){
    const intro:string = 'Myself Saugat Karki, I as a';
    const frontIntro: string = 'I have skills in React, HTML/CSS, TypeScript and JavaScript for building user interfaces. I am also skilled in design, testing, optimization, Git, and debugging. I am a good communicator and collaborate well with others to deliver high-quality web applications.';
    const backIntro: string = 'I specialize in creating server-side logic for web applications. I have experience working with Node.js, databases, REST APIs, authentication and authorization. I can use these skills to create scalable and secure web applications that integrate seamlessly with the React front-end.';

    const [subIntro, setSubIntro] = useState(true);
    const [isActive, setActive] = useState(true);

    const changeContent = ()=>{
        setActive(!isActive);
        setSubIntro(!subIntro);
    }

    const onDownloadClick = () => {
        // using Java Script method to get PDF file
        fetch('/src/assets/saugat_k_resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Saugat_karki.pdf';
                alink.click();
            })
        })
    }
    return(<>
    <div className="hero-banner">
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col px-5 d-flex flex-column justify-content-evenly">
        <h1>Hi there, 😊</h1>
        <h2>{intro}</h2>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className={isActive ? 'btn btn-outline-info active':'btn btn-outline-info'}>
    <input type="radio" name="options" id="option1" onClick={()=>changeContent()} defaultChecked />Front End Developer
  </label>
  <label className={isActive ? 'btn btn-outline-info ':'btn btn-outline-info active'}>
    <input type="radio" name="options" id="option2" onClick={()=>changeContent()}/> Back End Developer
  </label>
</div>
<p>{subIntro ? frontIntro : backIntro}</p>
<div>
    <button type="button" className="btn btn-primary btn-lg" onClick={()=>onDownloadClick()}>DownLoad Resume <FaFileDownload/></button>
</div>
        </div>
       <div className="col col-img">
        <img src="/src/assets/saugat memoji.png" alt="saugat memoji" loading="lazy" width={400} height={400}/>
       </div>
     </div>
    </div>
    </div>
        </>
    )
}

export default HeroBanner;