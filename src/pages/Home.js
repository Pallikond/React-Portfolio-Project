import React from 'react'
import  LinkedInIcon  from '@mui/icons-material/LinkedIn';
import  EmailIcon  from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, I am Sushmitha</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, Redux, Bootstrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, MY SQL</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home