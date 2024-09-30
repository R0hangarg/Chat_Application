import React, { useContext } from 'react'
import './Home.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Avatar, IconButton } from '@mui/material'
import { GlobalStateContext } from '../ContextApi/GlobalStateProvide'

const Home = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalStateProvider");
    }

    const { avatar } = context;
    return (
        <div className='home'>
            {/* Upper Panel  */}
            <div className="upperPanel">
                <div className="upperPanelLeft">
                    <IconButton aria-label="go back">
                        <ArrowBackIcon />
                    </IconButton>
                </div>
                <div className="upperPanelRight">
                    <Avatar src={avatar} alt='User' sx={{ height: "2vmax", width: "2vmax" }} />
                </div>
            </div>

            {/* Middel Panel For Messages */}
            <div className="middlePanel">
                H
            </div>
        </div>
    )
}

export default Home