import styles from './main.module.css'
import { ShieldCheck, Cloud, Music, Shield, Tv, ChevronRight, Monitor, Globe, Smartphone } from "lucide-react"
import { useUser } from "../utils/userContext.tsx";

const avatar:string = "https://fastly.picsum.photos/id/267/200/200.jpg?hmac=Y1nyfMYjg-MPsZP0aKx1TqI1ogQRSYtHkM5kpZpybqk"

export const Main = () => {
    const { user, isLoading } = useUser();

    if (isLoading) return <div>Загрузка...</div>;

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerImg}><img className={styles.avatar} src={avatar} alt="avatar"/></div>
                <div className={styles.headerText}>
                    <span className={`${styles.welcome} ${"primary-text-color"}`}>Добро пожаловать, {user?.firstName || "Пользователь"}</span>
                    <span className="secondary-text-color" style={{width: "75%"}}>Управляйте своими данными, безопасностью и конфиденциальностью, чтобы сервисы Unified работали на вас.</span>
                </div>
            </div>
            <div className={"card"}>
                <span style={{fontSize: "20px"}} className={"primary-text-color"}>Личная информация</span>
                <span style={{fontSize: "14px"}} className={"secondary-text-color"}>Информация о вашем профиле в сервисах Unified.</span>
                <div className={styles.cardData}>
                    <img className={styles.avatar} src={avatar} alt="avatar" style={{height: "50px", width: "50px"}}/>
                    <div className={styles.cardDataText}>
                        <span style={{fontSize: "16px", fontWeight: "700"}} className={"primary-text-color"}>{user?.firstName || "Имя"} {user?.lastName || "Фамилия"}</span>
                        <span style={{fontSize: "12px", color: "#6b7280"}}>@{user?.username || "Никнейм"}</span>
                    </div>
                </div>
                <div className={styles.cardLink}>
                    <div>Посмотреть подробности</div>
                    <ChevronRight/>
                </div>
            </div>
            <div className={"card"}>
                <span style={{fontSize: "20px"}} className={"primary-text-color"}>Защита аккаунта</span>
                <span style={{fontSize: "14px"}} className={"secondary-text-color"}>У вас есть рекомендации по безопасности. Проверьте настройки, чтобы защитить свои данные.</span>
                <div className={styles.fullDef}>
                    <ShieldCheck size={32} color={"#16a34a"}/>
                    <div className={styles.def}>
                        <span className={styles.securityPrimaryText}>Проверка безопасности</span>
                        <span className={styles.securitySecondaryText}>Найдено 2 рекомендации</span>
                    </div>
                </div>
                <div className={styles.cardLink}>
                    <div>Перейти к проверке</div>
                    <ChevronRight/>
                </div>
            </div>
            <div className={"card"}>
                <span style={{fontSize: "20px"}} className={"primary-text-color"}>Сервисы и хранилище</span>
                <span style={{fontSize: "14px"}} className={"secondary-text-color"}>Ваши активные подписки и доступные сервисы экосистемы.</span>
                <div className={styles.serviceIcon}>
                    <div className={styles.cloud}><Cloud className={styles.lucideIcon} size={undefined}/></div>
                    <div className={styles.music}><Music className={styles.lucideIcon} size={undefined}/></div>
                    <div className={styles.shield}><Shield className={styles.lucideIcon} size={undefined}/></div>
                    <div className={styles.tv}><Tv className={styles.lucideIcon} size={undefined}/></div>
                </div>
                <div className={styles.cardLink}>
                    <div>Все сервисы</div>
                    <ChevronRight/>
                </div>
            </div>
            <div className={"card"}>
                <span style={{ fontSize: "20px", fontWeight: "bold" }} className={"primary-text-color"}>Устройства</span>
                <span style={{ fontSize: "14px" }} className={"secondary-text-color"}>
                    Список устройств, где выполнен вход
                </span>
                <div className={styles.deviceStatusBox}>
                    <div className={styles.mainIcon} style={{borderRadius: "8px" }}>
                        <Monitor size={24} color={"#4ade80"} />
                    </div>
                    <div style={{ marginLeft: "12px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "14px", fontWeight: "500" }} className={"primary-text-color"}>Windows PC</span>
                            <span style={{ fontSize: "10px", color: "#4ade80", backgroundColor: "rgba(74, 222, 128, 0.1)", padding: "2px 6px", borderRadius: "4px" }}>
                                Онлайн
                            </span>
                        </div>
                        <div style={{ fontSize: "12px", display: "flex", alignItems: "center", gap: "4px" }} className={"secondary-text-color"}>
                            <Globe size={12} />
                            <span>Chrome 120.0 • Москва</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: "15px", fontSize: "13px" }} className={"secondary-text-color"}>
                    Всего активных сессий: 3
                </div>
                <div className={styles.cardLink}>
                    <div>Все устройства</div>
                    <ChevronRight/>
                </div>
            </div>
            <div className={styles.mobileCard}>
                <div style={{display: "flex", alignItems: "center", gap: "15px"}}>
                    <div className={styles.cardPhone}>
                        <Smartphone size={24}/>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <span style={{fontSize: "16px", fontWeight: "700"}} className={"primary-text-color"}>mID на вашем телефоне</span>
                        <span style={{fontSize: "14px"}} className={"secondary-text-color"}>Установите приложение для быстрого доступа к аккаунту.</span>
                    </div>
                </div>
                <div className={styles.download}>Установить</div>
            </div>
        </div>
    )
}

export default Main;