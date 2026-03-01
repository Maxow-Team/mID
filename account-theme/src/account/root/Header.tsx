/* eslint-disable */

// @ts-nocheck

import logoPngUrl from "../assets/logo.png";
import avatarSvgUrl from "../assets/favicon.svg";
import { useEnvironment } from "../../shared/keycloak-ui-shared";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, LogOut, Menu, X } from "lucide-react"


import styles from "./header.module.css";
import {ThemeToggle} from "../utils/ThemeToggle.tsx";
import { PageNav } from "./PageNav";


export const Header = () => {
    const { keycloak } = useEnvironment();
    const [isWindowOpen, setIsWindowOpen] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsWindowOpen(false);
            }
        };

        if (isWindowOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isWindowOpen]);



    return (
        <div className={styles.header}>
            <div className={styles.sidebarWrapper}>
                <Menu size={24} onClick={toggleMenu} className={"primary-text-color"}/>
            </div>
            <div className={styles.headerLogo}>
                <img className={styles.logo} src={logoPngUrl} alt="logo"/>
                <span className={`${"primary-text-color"} ${styles.name}`}>mID</span>
            </div>
            <div className={styles.avatarWrapper}>
                <div className={styles.headerAvatar} onClick={() => setIsWindowOpen(!isWindowOpen)}>
                    <div className={styles.headerName}>
                    <span style={{fontSize: "15px"}} className="primary-text-color">
                        {keycloak.tokenParsed?.preferred_username || "Пользователь"}
                    </span>
                        <span className="role" style={{fontSize:"12px", color: "gray"}}>ПОЛЬЗОВАТЕЛЬ</span>
                    </div>
                    <div>
                        <img className={styles.avatar} src={avatarSvgUrl} alt="avatar"/>
                    </div>
                    <div>
                        <ChevronDown size={15} className="secondary-text-color" />
                    </div>
                </div>
                {isWindowOpen && (
                    <div className={styles.headerWindow} ref={menuRef}>
                        <div className={styles.windowName}>
                            <span className="primary-text-color">{keycloak.tokenParsed?.given_name} {keycloak.tokenParsed?.family_name}</span>
                            <span className="secondary-text-color">{keycloak.tokenParsed?.email}</span>
                        </div>
                        <div style={{padding: "7px"}}>
                            <div className={styles.windowButton}>
                                <ThemeToggle/>
                            </div>
                            <div className={styles.windowButton} style={{border: "none"}}>
                                <div style={{color: "#be5b60"}}><LogOut size={20}/><span>Выйти</span></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`${styles.overlay} ${isSidebarOpen ? styles.overlayActive : ''}`}
                onClick={toggleMenu}
            ></div>

            <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarActive : ''}`}>
                <div className={styles.sidebarHeader}>
                    <span style={{fontSize: "18px", fontWeight: "900"}}>Меню</span>
                    <X size={20} onClick={toggleMenu} style={{cursor: 'pointer'}}/>
                </div>
                <PageNav onItemClick={toggleMenu}/>
            </div>
        </div>
    );
};
