import React from 'react';
// import {Link} from "react-router-dom";
import "./Navbar2.css";
const NavBar2 = () => {
  return (
    <div>
      <div className='horizontal_wrapper'>
        <div className='horizontal_Nav_left'>
            <ul>
                {/* <li><a href="" target='_blank' className='horizontal_nav_item' >Trending Now</a></li> */}
                {/* <li><Link to={"/htmlsection"} target='_blank' className='horizontal_nav_item' >Html</Link></li> */}
                <a href="/main?page=html&subpage=HTML%20Home" className='horizontal_nav_item' >HTML</a>
                <a href="/main?page=css&subpage=CSS%20Home" className='horizontal_nav_item' >Css</a>
                <a href="/main?page=javascript&subpage=JS%20Home" className='horizontal_nav_item' >JAVASCRIPT</a>
                <a href='/main?page=dsa&subpage=DSA%20Home' className='horizontal_nav_item' >Data Structures</a>
                <a href='/main?page=algo&subpage=ALGO%20Home' className='horizontal_nav_item' >Algorithms</a>
                <a href='/main?page=fc&subpage=FC%20Home' className='horizontal_nav_item' >Foundational Course</a>
                <a href='#' className='horizontal_nav_item' >Data Science</a>
                <a href='#' className='horizontal_nav_item' >Practice Problem</a>
                <a href='#' className='horizontal_nav_item' >Python</a>
                <a href='#' className='horizontal_nav_item' >Machine Learning</a>
                <a href='#' className='horizontal_nav_item' >Java</a>
                
                <a href='#' className='horizontal_nav_item' >C</a>
                <a href='#' className='horizontal_nav_item' >C++</a>
                <a href='#' className='horizontal_nav_item' >ReactJS</a>
                <a href='#' className='horizontal_nav_item' >NodeJS</a>
                <a href='#' className='horizontal_nav_item' >Competitive Programming</a>
                <a href='#' className='horizontal_nav_item' >Aptitude</a>
                <a href='#' className='horizontal_nav_item' >Puzzles</a>
                <a href='#' className='horizontal_nav_item' >Projects</a>
                <a href='#' className='horizontal_nav_item' >Web Development</a>
                
                <a href='#' className='horizontal_nav_item' >Aptitude</a>
                <a href='#' className='horizontal_nav_item' >Puzzles</a>
                <a href='#' className='horizontal_nav_item' >Projects</a>
                <a href='#' className='horizontal_nav_item' >Web Development</a>
                

            </ul>
        </div>
    </div>
    </div>
  )
}

export default NavBar2
