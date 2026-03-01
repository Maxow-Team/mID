import styles from './accountSecurity.module.css'
import { ShieldCheck, Shield, Smartphone, Key, ChevronRight } from "lucide-react"

const AccountSecurity = () => {
    return (
        <div className={"page"}>
            <div className={"page-header"}>
                <span style={{fontSize: "24px"}} className={"primary-text-color"}>Безопасность</span>
                <span style={{fontSize: "16px"}} className={"secondary-text-color"}>Настройки и рекомендации по защите вашего аккаунта.</span>
            </div>
            <div className={"card"} style={{gap: "0"}}>
                <div className={styles.rec} style={{paddingTop: "0", border: "none"}}>
                    <div className={styles.shieldCheck} style={{gridArea: "icon"}}><ShieldCheck size={24}/></div>
                    <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700", gridArea: "title"}}>Рекомендации по безопасности</span>
                    <span className={`${"secondary-text-color"} ${styles.recText}`} style={{fontSize: "14px", gridArea: "desc"}}>Мы нашли несколько способов сделать ваш аккаунт еще защищеннее.</span>
                </div>
                <div className={styles.rec}>
                    <div style={{gridArea: "icon", paddingTop: "10px"}}><Shield size={20} color={"#f59e0b"}/></div>
                    <span className={"primary-text-color"} style={{fontSize: "16px", gridArea: "title"}}>Привяжите резервную почту</span>
                    <span className={"secondary-text-color"} style={{fontSize: "14px", gridArea: "desc"}}>Это поможет восстановить доступ, если вы забудете пароль.</span>
                    <div className={`${styles.recButton} ${"active"}`} style={{gridArea: "button"}}>
                        <span>Добавить</span>
                    </div>
                </div>
                <div className={styles.rec} style={{paddingBottom: "0"}}>
                    <div style={{gridArea: "icon", paddingTop: "10px"}}><Smartphone size={20} color={"#3b82f6"}/></div>
                    <span className={"primary-text-color"} style={{fontSize: "16px", gridArea: "title"}}>Проверьте список устройств</span>
                    <span className={"secondary-text-color"} style={{fontSize: "14px", gridArea: "desc"}}>Убедитесь, что во всех сессиях узнаете свои устройства.</span>
                    <div className={`${styles.recButton} ${"active"}`} style={{gridArea: "button"}}>
                        <span>Проверить</span>
                    </div>
                </div>
            </div>
            <div className={"card"} style={{gap: "0"}}>
                <div className={"page-header"} style={{paddingBottom: "24px"}}>
                    <span style={{fontSize: "18px", marginBottom: "8px"}} className={"primary-text-color"}>Вход в Unified ID</span>
                    <span style={{fontSize: "14px"}} className={"secondary-text-color"}>Варианты входа и восстановления доступа.</span>
                </div>
                <div className={styles.entrance}>
                    <div className={styles.recContent}>
                        <Key size={20} className={"secondary-text-color"}/>
                        <div>
                            <span style={{fontSize: "16px"}} className={"primary-text-color"}>Пароль</span>
                            <span style={{fontSize: "12px"}} className={"secondary-text-color"}>Последнее изменение 10 янв. 2024</span>
                        </div>
                    </div>
                    <div className={`${styles.recButton} ${styles.recChevron}`}>
                        <ChevronRight size={20}/>
                    </div>
                </div>
                <div className={styles.entrance} style={{paddingBottom: "0"}}>
                    <div className={styles.recContent}>
                        <Smartphone size={20} className={"secondary-text-color"} style={{flexShrink: "0"}}/>
                        <div>
                            <span style={{fontSize: "16px"}} className={"primary-text-color"}>Двухфакторная аутентификация</span>
                            <span style={{fontSize: "12px"}} className={"secondary-text-color"}>Включена с 20 нояб. 2023</span>
                        </div>
                    </div>
                    <div className={styles.authButton}>
                        <div className={styles.authState}>
                            <span>Вкл</span>
                        </div>
                        <div className={`${styles.recButton} ${styles.recChevron}`}>
                            <ChevronRight size={20}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AccountSecurity;