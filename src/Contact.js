import headshot from './pictures/Headshot2.png'
import TitleBar from './titleBar'
import ContentBlock from './contentBlock'
import githubLogo from './pictures/githubLogoClear.png'
import linkedInLogo from './pictures/linkedInLogo.png'
import facebookLogo from './pictures/FacebookLogo.png'
export default function Contact() {
  return <div className='contentBody'>
    <TitleBar title="Contact Info" details="Contact and Social Media" imageSrc={headshot} selectedPage="Contact" imageAlt="Headshot"/>
    <ContentBlock> 
      <h1 className='sectionHeader'>
        Contact Information
      </h1>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        Email: <a href="mailto:devanneil2004@gmail.com">devanneil2004@gmail.com</a>
      </p>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        Phone Number: <a href="tel:+19703614121">(970) 361-4121</a>
      </p>
      <p className='contentSection' style={{ textAlign: 'center'}}>
        See the links below for my github and social media.
      </p>
    </ContentBlock>
    <div className='imageRow'>
      <a href="https://github.com/devanneil" target="_blank" rel="noopener noreferrer">
        <img className='imageLink' src={githubLogo} alt="The github logo"></img>
      </a>
      <a href="https://linkedin.com/in/devan-neil" target="_blank" rel="noopener noreferrer">
        <img className='imageLink' src={linkedInLogo} alt="The linkedIn logo"></img>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100008669838346" target="_blank" rel="noopener noreferrer">
        <img className='imageLink' src={facebookLogo} alt="The Facebook logo"></img>
      </a>
    </div>
  </div>
}