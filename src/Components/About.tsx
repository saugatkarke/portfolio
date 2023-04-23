import {AiOutlineMinus} from 'react-icons/Ai';

function About(){
    const overview:string = "Hola! My name is Saugat Karki, and I'm a full-stack developer based in Sydney, Australia. I completed my Bachelor's degree in Software Development from Southern Cross University in 2022, and before that, I completed my diploma in Networking & Advanced Diploma in Network Security from Australian Harbor International College back in 2019."
    const hobbies: string = "I have been working as a full-stack developer at EVPowerhouse since 2020, where I get to flex my creative muscles and put my skills to the test. When I'm not working, you can find me playing soccer, jamming out to some hip-hop, or crushing it on my PS4. My favorite artist of all time is none other than the one and only Kanye West, and if you haven't heard of him, then we need to have a serious chat. I also love physical training to stay healthy and active."
    const passion: string = "As a developer, I have a soft spot for frontend programming, especially when it comes to UI/UX designs. I enjoy working with tools like React, Figma, Angular, Vanilla JavaScript, and can create designs that are both aesthetically pleasing and functional. But don't let my love for frontend fool you - I'm also a fan of backend development and have experience working with Node.js, PHP, and databases.So, that's a little bit about me. If you want to learn more, feel free to reach out, and let's grab a coffee or a game of soccer sometime!"

    return(
        <>
        <h1 className="text-center py-5">About Me</h1>
        <div className="container-fluid about-cont">
            <div className="row align-items-center">
            <div className="col-md">
            <div className="container">
            <h1 className="overview">Overview</h1>
            <hr/>
            <p>{overview}</p>
            </div>
            </div>
        <div className="col">
        <img src="https://media.licdn.com/dms/image/D5603AQHT874Z9lmapQ/profile-displayphoto-shrink_800_800/0/1668271836809?e=1686182400&v=beta&t=ClPPi5UDE4Jxn149lxapP4wIVgMuuPGu4UG9iQVWBrI" width="400" height="400" alt=""  className="about-img"/>
        </div>
        </div>
        </div>
        </>
    )
}

export default About;