import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTransition, animated } from 'react-spring'
import NavMenu from './NavMenu';


function Navigation(){
    const [showMenu, setShowmenu] = useState(false)
    const masktransitions = useTransition(showMenu, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
      })
    const menutransitions = useTransition(showMenu, {
    from: { opacity: 0, transform:'translateX(-100%)'},
    enter: { opacity: 1, transform:'translateX(0%)' },
    leave: { opacity: 0, transform:'translateX(-100%)' },
  })
    return(
        <nav>
            <span className="text-xl">
            <FontAwesomeIcon 
            icon={faBars}
            onClick={() => setShowmenu(!showMenu)}ZXX/>
            </span>
        
           {
        masktransitions(
        (styles, item) => item && <animated.div style={styles} 
        className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={()=>setShowmenu(false) }>
            </animated.div>)
           }
         {
        menutransitions(
        (styles, item) => item && <animated.div style={styles} 
        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3"
        >
            <NavMenu closeMenu={() => setShowmenu(false)}/>
            </animated.div>)
           }
        
            
        </nav>
    );
}

export default Navigation