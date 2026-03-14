import Robot from './pictures/robot.jpg'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import HMFrame from './pictures/HMFrame.png'
import Logo from './pictures/LogoSmall.png'
import LegoRobot from './pictures/LegoRobot.png'
import PaddockPal from './pictures/paddock-pal.jpg'
import RoSESoil from './pictures/SoilDepthResults.png'
export default function Projects() {
  return <div className='contentBody'>
    <TitleBar title="Project Gallery" details={"A comprehensive list of my engineering projects"} imageSrc={Robot} selectedPage="Projects" imageAlt="Headshot"/>
    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Robotics Projects</h1>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        Projects listed by size and scope
      </p>
    </ContentBlock >

    <ContentBlock  image={HMFrame} caption='Initial drawings of the Harvestman'>
      <h1 className='sectionHeader'>Harvestman Project</h1>
      <p className='contentSection'>
        The Harvestman project is a hexapod robot designed to navigate autonomously through rural and urban terrain.
        The goal of the Harvestman is to build a single modular robotic platform for doing research and automated processes.
        I also hope to use the Harvestman for educational resources.
        <br/> <br/>
        This project is still in its development phase. 
        I am entirely in charge of this project and am currently responsible for every design decision.
        As it stands I have the hardware to assemble the design pictured in figure 1.
        However I have determined that a redesign is required to proceed to make the robot easier to assemble at the cost of more parts.
        <br/> <br/>
        The inspiration for this locomotion system comes from biology, specifically insects. 
        While the Harvestman would be closer to a 'true bug' than an insect, hexapod robots are broadly called spiders.
        However, the Harvestman is not a spider. 
        Like its namesake, the harvestman spider (also called a daddy longlegs) it is often mistaken for a spider despite being biologically distinct.
        <br/><br/>
        Based on its inspiration, the Harvestman uses 6 legs to get around.
        While robots have been able to achieve similar results, see Boston Dynamics' Spot, 6 legs are going to be more balanced and enable vertical climbing over appropriate surfaces.
        Unfortunately, the Harvestman is a little heavier than an insect and thus will not be able to climb every surface.
        I plan on using a frame system to help the Harvestman navigate through a workspace.
        The unfortunate downside is the increased demands of an extra set of legs. 
      </p>
    </ContentBlock>

  <ContentBlock  image={Logo} caption='Current state of the Harvestman'>
      <h1 className='sectionHeader'>Next Steps</h1>
      <p className='contentSection'>
        As has been previously mentioned, there is a redesign in progress.
        I am hoping to reprint the parts I have in ABS, as the PLA plastic degrades in sunlight, which is not suitable for an outdoor robot.
        The redesign will remove the need for heatset inserts in the legs and will make the plastic interface directly with the servo gears.
        As it currently stands the servos hold screws which have several nuts to hold the leg in place with friction.
        While the intention was to allow me to calibrate the servo's home position, this feature is not useful practically.
        <br/><br/>
        While this redesign will produce a functional version 1, additional work will focus on manufacturing improvements. 
        I am already researching version 2, which aims to eliminate black-box servos and incorporate a fully weatherproof chassis.
        In this iteration, the actuators will be housed inside the chassis rather than on the legs. 
        The elbow joints will be driven using a rope-and-tackle system, while the shoulder joints will employ a three-axis mechanism.
        These changes will increase each leg's effective reach and enable the integration of tool heads for operational tasks, expanding the robot's functional capabilities.
        <br/><br/>
        Version 2 is currenlty being held off from initial prototypes, as I want to finish the version 1 and produce it as an educational kit.
        As was mentioned above, the Harvestman will be used in educational experiences.
        I want to be able to distribute the Harvestman as a kit which will teach high school and undergraduate students how robots work.
      </p>

    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Simulation</h1>
        <p className='contentSection'>
          As part of the Harvestman project, I am planning on developing and distributing Gazebo config files,
          and the appropriate config files for integrating the Harvestman with Quantum Enine, which you can read about on this page
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={PaddockPal} imageAlt="The Paddock Pal V.2 as of 3/10/2026" caption='The Paddock Pal V.2 as of 3/10/2026'> 
      <div>
        <h1 className='sectionHeader'>Krap Shoot</h1>
        <p className='contentSection'>
          The Krap Shoot is my Capstone Design project. 
          Together with a team of 13 other engineering students, we are automating the process of paddock mucking.
          The more official name of this project is called the Paddock Pal V.2.
          The goal of this project is to automatically identify manure piles inside a paddock, clean them, and deposit the waste in a collection area.
          This project is in association with {" "}
          <a
            href="https://www.mines.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Longhopes Donkey Shelter 
          </a>
          {" "}and the {" "}
          <a
            href="https://www.mines.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Colorado School of Mines
          </a>.
          <br/><br/>
          When we first began this project we had the parts from V.1.
          V.1 was a similar project taken by previous teams, which was not able to be completed.
          The design of the Krap Shoot is a skid steer front wheel drive vehicle with a scoop on the front. 
          Attached is an image of our CAD, which I am not responsible for.
          <br/><br/>
          I am in charge of the software system. 
          In our team we have 2 robotics students, myself included, and a team of 3 software students who were in a field session program.
          Our Field Session team was tasked with building a pathfinding algorithm for our robot to handle navigation from point to point and planning the path to complete a job.
          It is my responsibility to manage communications between these teams, and to handle implementation of the various systems.
          <br/><br/>
          Our robot has LiDAR, GPS, IMU and a Camera.
          Using all of these Krap Shoot will be able to navigate a paddock and complete jobs autonomously.
          We use the GPS to track the boundaries of the paddock, or the working area.
          We use the LiDAR and the integrated IMU to handle tracking hazards, as paddocks are occupied, and for handling position feedback.
          <br/><br/>
          This project is still ongoing and is the capstone project for my engineering program.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={LegoRobot} imageAlt='A robotic car made out of legos' caption='The robotic car for my robotics class, it has trapped itself'> 
      <div>
        <h1 className='sectionHeader' style={{ fontSize: '3rem'}}>Other Robotics Projects</h1>
        <h1 className='sectionHeader'>Lego Robotics</h1>
        <p className='contentSection'>
          As part of my robotics curriculum, I was tasked with building an arduino robot to solve a maze.
          This robot used mostly LEGO parts, along with an arduino, breadboard, 2 break beam sensors, a sonar sensor and an ir sensor.
          The goal was to navigate the maze grid autonomously.
          This goal was never achieved due to the flimsy nature of the parts, however I did learn about motor classification, sensor calibration and a maze navigation algorithm.
        </p>
        <h1 className='sectionHeader'>NAO Research Project</h1>
        <p className='contentSection'>
          As more of my robotics curriculum, I needed to study how robots can interact with humans in a more social setting.
          For this task my group was given the NAO robot.
          We attempted to apply the NAO robot to treat anxiety caused by healthcare.
          You can see our report {" "}
          <a href='https://github.com/devanneil/devanneil.github.io/blob/f972c26c01e2697791a27a302acacafb20632cc0/src/assets/Investigating%20the%20Correlation%20Between%20Robot%20Informality%20and%20Ability%20to%20Affect%20Patient%20Anxiety.docx.pdf'
          target="_blank"
          rel="noopener noreferrer"
          > here </a>
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Software Projects</h1>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        Here there be monsters
      </p>
    </ContentBlock >

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Quantum Engine</h1>
        <p className='contentSection'>
          Quantum Engine is a project I am working on alongside one of my friends and colleagues, Courage Gallegos. 
          Our goal with Quantum Engine is to build a lightweight rendering and simulation tool.
          Quantum Engine is built entirely in C++ using openGL.
        <br/>
        <br/>
          The major design goals of Quantum are as follows:
            <ul style={{marginLeft: '50px'}}>
              <li>Modular control over included components</li>
              <li>Swappable rendering backend</li>
              <li>Bindings for other languages</li>
            </ul>
          These are all important for our final goal of having a single suite of tools, the Quantum Suite,
          for rendering, simulation, game development and 3D graphics tools.
          <br/>
          <br/>
          While we have a working prototype of the actual rendering tool, we have not yet verified swapping
          the rendering backend, and we want to work on making the code a lot more efficient and user friendly.
          The next stpes for this project are to repair the backend linear algebra, design a UI system, 
          build a node graph tool and a compute graph tool, and design the implementation for a 
          generalized shader script from the node graph. From there we design the tools we actually want.
          I am going to work on a simulation tool for basic rigid body physics and I am going to make a ROS2 bridge.
          Courage wants to design a game engine and build a video game on it.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock image={RoSESoil} imageAlt='An image showing varios camera feeds and the post processing results' 
      caption='Pictured here is a single frame of the processed video. We hadn&apos;t calculated the actual depth estimate at this time, and further work is being done for a smoother final result.'> 
      <div>
        <h1 className='sectionHeader'>RoSE Lab</h1>
        <p className='contentSection'>
          I am a member of the Colorado School of Mines {""}
          <a
            href="https://github.com/RoSE-Lab-Admin"
            target="_blank"
            rel="noopener noreferrer"
          >
          RoSE Lab
          </a>.
          My work with the RoSE Lab is with the digital twin team, where we are bulding a digital twin of the lunar
          surface inside Nvidia's Isaac Sim, and on a project with the terramechanics team attempting to estimate the soil
          properties from videos recording the wheels during trials. This terramechanics project is where I've made more contribution,
          Attached is a screenshot of my team's methods, where we are using a circular RANSAC algorithm to estimate the wheel position
          and an edge detection algorithm to estimate the total sinkage. From this data we'll be able to determine several soil properties.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Automated Apple Harvesting COBOT</h1>
        <p className='contentSection'>
          This project is in association with Randy Allard and the Washington Fruit Tree Commission
          <br/>
          <br/>
          In this project we are Investigating automated apple harvesting using a DUCO GCR16-200 COBOT. 
          A previous team has already trained an ONNX model for vision based detection of apples, 
          now we just need to pick them. Randy Allard has previously designed a working apple harvesting machine,
          and he's providing the steps to actually pick the apples. We are going to use a suction cup and a vacuum generator
          to automatically grab the apples and we are going to use a routine to twist the apples off the stem. 
          This is the most effective way we've found to achieve this. 
          <br/>
          <br/>
          My role in this project is to get the robot itself working.
          This will consist of a ROS2 interface to drive the robot, a setup with MoveIt to handle the inverse kinematics,
          a simulation to visualize the robot's planned behavior, and the detection and picking runtimes. I am also planning 
          on building a user's manual, but this is not part of the project.
          This is an incredibly enjoyable project and we will be able to open source the code. 
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock>
      <h1 className='sectionHeader' style={{ fontSize: '4rem'}}>Miscellaneous Projects</h1>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        A mostly comprehensive list of everything else, probably.
      </p>
    </ContentBlock >

    <ContentBlock > 
      <div>
        <h1 className='sectionHeader'>3D Printer Build</h1>
        <p className='contentSection'>
          I'm currently in the process of building a corexy dual extruder 3D printer. I am following the instructions
          for convertin 2 old Ender 3's {""}
          <a
            href="https://github.com/RoSE-Lab-Admin"
            target="_blank"
            rel="noopener noreferrer"
          > here </a>, but I have needed to make modifications for my Ender 3 Pro's and I am building a custom extruder.
        </p>
      </div>
      
    </ContentBlock>

    <ContentBlock> 
      <div>
        <h1 className='sectionHeader'>Drone Build</h1>
        <p className='contentSection'>
          As part of my high school courses, I was able to take a class which had a team of students building a drone together.
          I was in charge of assembling, configuring, and calibrating the drone itself.
          I learned how to use QGroundControl to interface with the drone and how to program a PIXHAWK flight controller.
          While the goal of the class was not met, that being getting our commercial drone license through the FAA, 
          I was able to complete my Part 107 recreational TRUST licence, and have kept it maintained since.
        </p>
      </div>
      
    </ContentBlock>
    
  </div>
}