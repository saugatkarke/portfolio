import ProjectCards from "./ProjectCards";

function Projects(){
   
      const projectDetails = {
        evpower: 
        {title:'EvPowehouse', 
        proType: 'Ecommerce Web App',
        imgFile: '/src/assets/evpowerhouse.jpeg',
        link: 'https://evpowerhouse.com.au/'},
        vairaza: 
        {title:'VaiRazaSolutions', 
        proType: 'Static Web App',
        imgFile: '/src/assets/vairaza.jpeg',
        link: 'https://vairazasolutions.com.au/'},
        weather: 
        {title:'Weather App', 
        proType: 'Weather Web App',
        imgFile: '/src/assets/weatherApp.jpeg',
        link: 'https://my-project-23be0.web.app'}
      };

     const {evpower, vairaza, weather} = projectDetails;

    return(<>
        <h1 className="text-center py-5">Portfolio Projects</h1>
        <div className="d-flex justify-content-around">
        <ProjectCards project={evpower}/>
        <ProjectCards project={vairaza}/>
        <ProjectCards project={weather}/>
        </div>
      </>
    )
}

export default Projects;