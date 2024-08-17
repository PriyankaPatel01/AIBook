import React, { useRef } from 'react'
import { createContext, useState } from 'react';

import Features from '../Features/Features';
import HowItWorks from '../HowItWorks/HowItWorks';
import RoadMap from '../RoadMap/RoadMap';
import Prices from '../Prices/Prices'


import './HomePage.css';
export const ThemeContext = createContext(null);


const HomePage = () => {
    const feat = useRef(null);
    const handleFeature = () =>
    {
        feat.current?.scrollIntoView({behavior: 'smooth'});

    }

    const how = useRef(null);
    const handleHow = () =>
    {
        how.current?.scrollIntoView({behavior: 'smooth'});

    }

    const road = useRef(null);
    const handleRoad = () =>
    {
        road.current?.scrollIntoView({behavior: 'smooth'});

    }


    const [theme, setTheme] = useState("dark");
    const [toggle, setToggle] = useState('./half-moon.png');
    
    
    const toggleTheme = () =>
    {
        setTheme((curr) => (curr === "light" ? "dark"  : "light"));
        setToggle((cur) => (cur === './sun.png' ? "./half-moon.png" : './sun.png'));
    }

    

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div id={theme}>
            <div className='nav-bar'>
                    <div className="left">
                        <img src="./logo.png" alt='some_image' className='logo_image'/>
                        <p>BookAI</p>
                    </div>

                    <div className="right">
                    <ul>
                        <li onClick={handleFeature}>Features </li>
                        <li onClick={handleHow}>How it Works</li>
                        <li onClick={handleRoad}>RoadMap</li>
                        <li onClick={toggleTheme}><img src={toggle} alt={theme} width={30} height={30} /></li>
                        <li>Prices</li>
                        <li>API</li>
                        <li>Models</li>
                    </ul>
                    </div>
            </div>
            <div className='home'>
                <p className="title">Explore the Possibilities of <span>AI Book Writing</span> with BookAI</p>
                <p className="desc">Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books</p>
                <button className="button1">Get Started</button>
                <button className="button2">Get API Access</button>
                <p className="attention">Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
            </div>
            
            <Features ref={feat} t={theme}/>
            <HowItWorks ref={how} t={theme}/>
            <RoadMap ref={road} t={theme}/>
            <Prices t={theme}/>

        </div> 
        
    </ThemeContext.Provider>
  )
}

export default HomePage
