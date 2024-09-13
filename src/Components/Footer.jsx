import React from 'react'
import './Footer.css';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import ContactUs from './ContactUs';
const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className='sb_footer section_padding'>
                    <div className='sb_footer-links'>
                        <div className='sb_footer-links-div'>
                            <h4>Explore</h4>
                            <a href=''>
                                <p>Challenge</p>
                            </a>
                            <a href=''>
                                <p>Hack-A-Thon</p>
                            </a>
                            <a href=''>
                                <p>Weekly Contest</p>
                            </a>
                            <a href=''>
                                <p>DSA in JAVA/C++</p>
                            </a>
                            <a href=''>
                                <p>Job-A-Thon Hiring</p>
                            </a>
                            <a href=''>
                                <p>Master CP</p>
                            </a>
                        </div>
                        <div className='sb_footer-links-div'>
                            <h4>Languages</h4>
                            <a href=''>
                                <p>Python</p>
                            </a>
                            <a href=''>
                                <p>Java</p>
                            </a>
                            <a href=''>
                                <p>C++</p>
                            </a>
                            <a href=''>
                                <p>PHP</p>
                            </a>
                            <a href=''>
                                <p>SQL</p>
                            </a>
                            <a href=''>
                                <p>R Language</p>
                            </a>
                            <a href=''>
                                <p>Android Tutorial</p>
                            </a>
                        </div>
                        <div className='sb_footer-links-div'>
                            <h4>DSA Concepts</h4>
                            <a href='/main?page=dsa&subpage=DSA%20Arrays'>
                                <p>Arrays</p>
                            </a>
                            <a href=''>
                                <p>Strings</p>
                            </a>
                            <a href='/main?page=dsa&subpage=DSA%20Linked%20Lists'>
                                <p>Linked List</p>
                            </a>
                            <a href=''>
                                <p>Algorithms</p>
                            </a>
                            <a href=''>
                                <p>Searching</p>
                            </a>
                            <a href=''>
                                <p>Sorting</p>
                            </a>
                            <a href=''>
                                <p>Mathematical</p>
                            </a>
                            <a href=''>
                                <p>Dynamic Programming</p>
                            </a>
                        </div>
                        <div className='sb_footer-links-div'>
                            <h4>Company</h4>
                            <a href=''>
                                <p>About Us</p>
                            </a>
                            <a href=''>
                                <p>Legal</p>
                            </a>
                            <a href=''>
                                <p>Careers</p>
                            </a>
                            <a href=''>
                                <p>In Media</p>
                            </a>
                            <a href=''>
                                <p>Contact Us</p>
                            </a>
                            <a href=''>
                                <p>Campus Training Program</p>
                            </a>
                        </div>
                        <div className='sb_footer-links-div'>
                            {/* <h4>Contact Us</h4> */}
                            <div className='socialmedia'>
                                <a href='https://github.com/HemanthTigga' target='_blank'><img src={github} alt='' /> </a>
                                <a href='mailto:hemumani73@gmail.com'><img src={gmail} alt='' /> </a>
                                <a href='#'><img src={instagram} alt='' /> </a>
                                <a href='https://www.linkedin.com/in/g-hemanth-tigga-19baa7228/' target='_blank'><img src={linkedin} alt='' /> </a>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='sb_footer-below'>
                        <div className='sb_footer-copyright'>
                            <p>
                                @{new Date().getFullYear()} CoCoding. All right reserved.
                            </p>
                        </div>
                        <div className='sb_footer-below-links'>
                            <a href=''><div><p>Terms & conditions</p></div></a>
                            <a href=''><div><p>Privacy</p></div></a>
                            <a href=''><div><p>Security</p></div></a>
                            <a href=''><div><p>Cookie Declaration</p></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
