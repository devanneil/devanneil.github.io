import TitleBar from './titleBar'
import Logo from './pictures/LogoSmall.png'
import ContentBlock from './contentBlock'
export default function Company() {
  return <div className='contentBody'>
    <TitleBar selectedPage='3D Neil Tech' imageSrc={Logo}/>
    <ContentBlock image={Logo} imageAlt='This will hold the actual logo' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        3D Neil Tech
        </h1>
        <p className='contentSection'>
        The modern home is full of smart technology that's so painfully limited. Your smart home speaker can't do the dishes
        and your Roomba will never be more than a vacuum. On top of that these technologies are at best unknowable black boxes.
        This is the purpose of 3D Neil Tech. We provide modular, secure home robotics solutions to treat your daily needs.
        3D Neil Tech prioritizes affordability such that robotics can become accessible to anyone. Alongside this we prioritize
        security and privacy as these robots belong in the home. Most of all we provide educational resources to make sure that
        your robot isn't some black box solution that's far too complex to fix. 
        <br/>
        <br/>
        Our flagship program is the Harvestman Project. The Harvestman Project aims to produce a hexapod robotic frame with
        endless possibility. As part of this project, 3D Neil Tech is developing educational curriculum for high school students
        to get the technology into their hands to solve real world problems. Development into the Harvestman kit is ongoing,
        as we continue to refine and improve the design for ease of use, durability, and industry standard practices.
        </p>
      </div>
    </ContentBlock>

    <ContentBlock image={Logo} imageAlt='A placeholder image' caption='A placeholder image'> 
      <div>
        <h1 className='sectionHeader'>
        The Future
        </h1>
        <p className='contentSection'>
        The Harvestman Project is the first step into a broad robotics ecosystem.
        The future of 3D Neil Tech has us providing household robotics for all of your needs. 
        As part of our vision, by providing educational materials we believe that we'll raise up the next generation of problem solvers
        with the tools they'll need to automate the tasks they face in their day-to-day lives.
        <br/><br/>
        Additionally, 3D Neil Tech aims to investigate Orbital Robotics to clean up our orbit spaces around Earth
        and provdie access to space science for people of all walks of life
        </p>
      </div>
    </ContentBlock>

  </div>
}