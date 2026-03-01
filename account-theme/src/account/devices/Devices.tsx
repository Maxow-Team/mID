import styles from "./devices.module.css"
import { Laptop, Globe, Smartphone } from "lucide-react"

const Devices = () => {
    return(
        <div className={"page"}>
            <div className="page-header">
                <span style={{fontSize: "24px"}} className={"primary-text-color"}>Устройства</span>
                <span style={{fontSize: "16px"}} className={"secondary-text-color"}>Список устройств, на которых выполнен вход в ваш аккаунт.</span>
            </div>
            <span className={"secondary-text-color"} style={{fontSize: "14px", fontWeight: "700"}}>ТЕКУЩЕЕ УСТРОЙСТВО</span>
            <div className={"card"} style={{display: "flex", flexDirection: "row", borderLeft: "4px solid #22c55e"}}>
                <div className={styles.laptop}>
                    <Laptop size={32}/>
                </div>
                <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700", paddingBottom: "3px"}}>Windows PC</span>
                            <span className={"secondary-text-color"} style={{fontSize: "14px"}}><Globe size={14} style={{paddingTop: "3px"}}/> Chrome 120.0 • Москва, Россия</span>
                        </div>
                        <div className={styles.online}>
                            <span>Онлайн</span>
                        </div>
                    </div>
                    <div className={styles.ip}>
                        <span>IP: 192.168.1.1</span>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <span className={"secondary-text-color"} style={{fontSize: "14px", fontWeight: "700"}}>ДРУГИЕ УСТРОЙСТВА</span>
                <span className={`${styles.exitAll} ${"active"}`}>Выйти со всех устройств</span>
            </div>
            <div className={`${"card"} ${styles.device}`}>
                <div style={{display: "flex"}}>
                    <div className={styles.icon}>
                        <Smartphone size={24}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", gap: "5px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span className={"primary-text-color"} style={{fontSize: "16px", fontWeight: "700"}}>iPhone 13</span>
                        <span className={"secondary-text-color"} style={{fontSize: "14px"}}>Unified App • Москва, Россия</span>
                        <span className={"secondary-text-color"} style={{fontSize: "12px", marginTop: "4px", color: "#9ca3af"}}>Был(а) в сети: 2 часа назад</span>
                    </div>
                    <div className={`${styles.exit} ${"active"}`}>
                        <span>Выйти</span>
                    </div>
                </div>
            </div>
            <div className={`${"card"} ${styles.device}`}>
                <div style={{display: "flex"}}>
                    <div className={styles.icon}>
                        <Laptop size={24}/>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", gap: "5px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span className={"primary-text-color"} style={{fontSize: "16px", fontWeight: "700"}}>MacBook Air</span>
                        <span className={"secondary-text-color"} style={{fontSize: "14px"}}>Safari • Санкт-Петербург, Россия</span>
                        <span className={"secondary-text-color"} style={{fontSize: "12px", marginTop: "4px", color: "#9ca3af"}}>Был(а) в сети: Вчера, 14:30</span>
                    </div>
                    <div className={`${styles.exit} ${"active"}`}>
                        <span>Выйти</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices;