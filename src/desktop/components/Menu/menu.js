import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import CloseIcon from '@mui/icons-material/Close';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import RemoveIcon from '@mui/icons-material/Remove';
import { Avatar } from '@mui/material';
import { Tabs, TabProperties } from "@sinm/react-chrome-tabs";
import '@sinm/react-chrome-tabs/css/chrome-tabs.css';
import './menu.css'
import c_logo from '../../assets/contact_logo.png'
import t_logo from '../../assets/t_logo.png'
import pi_logo from '../../assets/pi_logo.png'
import DContact from '../../pages/Contact/contact.js'
import DTeaching from '../../pages/Teaching/teaching'
import DInfo from '../../pages/Info/info'
import { useNavigate } from "react-router-dom";
import Google from '../../pages/Google/google';
import g_favicon from '../../assets/g_favicon.ico'

let id = 1;
let c_show = false;
let t_show = false;
let pi_show = false;
let h_show = true;
export default function Menu() {
    const navigate = useNavigate();
    const [tabs, setTabs] = useState([
        { id: "1", title: "Professor Vera", favicon: g_favicon, active: true },
        { id: "4", title: "Contacts", favicon: c_logo, active: false },
        { id: "3", title: "Teaching", favicon: t_logo, active: false },
        { id: "2", title: "Personal Info", favicon: pi_logo, active: false }


    ]);

    const active = (id) => {
        setTabs(tabs.map((tab) => ({ ...tab, active: id === tab.id })));

        switch (id) {
            case "2":
                c_show = false;
                t_show = false;
                pi_show = true;
                h_show = false;
                navigate("/info");

                break;
            case "3":
                c_show = false;
                t_show = true;
                pi_show = false;
                h_show = false;
                navigate("/teaching");
                break;
            case "4":
                c_show = true;
                t_show = false;
                pi_show = false;
                h_show = false;
                navigate("/contact");
                break;
            default:
                c_show = false;
                t_show = false;
                pi_show = false;
                h_show = true;
                navigate("/");
                break;


        }
    };

    const close = () => {
        setTabs(tabs.filter((tab) => tab.id !== id));
    };
    const reorder = (tabId, fromIndex, toIndex) => {
        const beforeTab = tabs.find(tab => tab.id === tabId);
        if (!beforeTab) {
            return;
        }
        let newTabs = tabs.filter(tab => tab.id !== tabId);
        newTabs.splice(toIndex, 0, beforeTab);
        setTabs(newTabs);
    };


    return (
        <div>

            <Paper className='mac_bar' elevation={3} square>
                <Stack className='mac_buttons' spacing={1} direction="row">
                    <Avatar className='close'>
                        <CloseIcon className='mac_icons' />
                    </Avatar>
                    <Avatar className='min'>
                        <RemoveIcon className='mac_icons' />
                    </Avatar>
                    <Avatar className='fs'>
                        <CloseFullscreenIcon className='mac_icons' />
                    </Avatar>
                </Stack>

            </Paper>
            <Tabs
                onTabClose={close}
                onTabReorder={reorder}
                onTabActive={active}
                tabs={tabs}
            />

            {c_show && <DContact />}
            {t_show && <DTeaching />}
            {pi_show && <DInfo />}
            {h_show && <Google />}
        </div>


    );
}