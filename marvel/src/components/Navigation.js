import React,{ useState, useEffect } from "react";
import style from "../styles/navigation.module.scss";
import SearchBar from "./SearchBar";
import LanguageSelection from "./LanguageSelection";
import useWindowSize from "../hooks/useWindowSize";

function Navigation() {
    const [width, ] = useWindowSize();
    const [bigScreen, setBigScreen] = useState(true);

    useEffect(() => {
        if (width > 950) {
            setBigScreen(true);
        } else {
            setBigScreen(false);
        }
    }, [width]);
    
    return (
        <div className={style.nav}>
            {
                bigScreen ? (<>
                    <SearchBar />
                    <LanguageSelection /> 
                </>) : (<>
                    <LanguageSelection />
                    <SearchBar />
                </>)
            }
            
        </div>
    );
}

export default Navigation;