import { useState } from "react";
import { Box,
    IconButton,
    MenuItem,
    InputBase,
    Typography,
    Select,
    FormControl,
    useTheme,
    useMediaQuery

 } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import NotificationImportantSharpIcon from '@mui/icons-material/NotificationImportantSharp';
import HelpIcon from '@mui/icons-material/Help';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch,useSelector } from "react-redux";
import { setMode,setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = ()=>{
    return(
        <div>
            <h1>Navbar</h1>
        </div>
    )
}

export default Navbar;