import styles from "./services.module.css"
import { Shield, Check, Cloud, Music, Tv } from "lucide-react"

const Services = () => {
    return(
        <div className={"page"}>
            <div className="page-header">
                <span style={{fontSize: "24px"}} className={"primary-text-color"}>Сервисы и продукты</span>
                <span style={{fontSize: "14px"}} className={"secondary-text-color"}>Управляйте своими сервисами в экосистеме Unified.</span>
            </div>
            <div className={styles.pageContent}>
                <div className={`${"card"} ${styles.cardHover}`}>
                    <div className={styles.cardBody}>
                        <div className={styles.title}>
                            <div>
                                <div className={styles.shield}><Shield size={24}/></div>
                                <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700"}}>mVPN</span>
                                <p className={"secondary-text-color"} style={{fontSize: "14px"}}>Быстрый и безопасный доступ в интернет.</p>
                            </div>
                            <div className={styles.active}>
                                <span>Активно</span>
                            </div>
                        </div>
                        <div className={styles.connect}>
                            <div>
                                <span className={"primary-text-color"} style={{fontSize: "14px"}}>Используется</span>
                            </div>
                            <div className={styles.con}>
                                <Check size={16}/>
                                <span>Подключено</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${"card"} ${styles.cardHover}`}>
                    <div className={styles.cardBody}>
                        <div className={styles.title}>
                            <div>
                                <div className={styles.icon}><Cloud size={24}/></div>
                                <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700"}}>Unified Cloud</span>
                                <p className={"secondary-text-color"} style={{fontSize: "14px"}}>1 ТБ места для ваших фото и документов.</p>
                            </div>
                            <div className={styles.recommendation}>
                                <span>Рекомендуем</span>
                            </div>
                        </div>
                        <div className={styles.connect}>
                            <div>
                                <span className={"primary-text-color"} style={{fontSize: "14px"}}>299 ₽/мес</span>
                            </div>
                            <div className={`${styles.try} ${"active"}`}>
                                <span>Попробовать</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${"card"} ${styles.cardHover}`}>
                    <div className={styles.cardBody}>
                        <div className={styles.title}>
                            <div>
                                <div className={styles.icon}><Music size={24}/></div>
                                <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700"}}>Unified Music</span>
                                <p className={"secondary-text-color"} style={{fontSize: "14px"}}>Музыка без ограничений и рекламы.</p>
                            </div>
                            <div className={styles.recommendation}>
                                <span>Рекомендуем</span>
                            </div>
                        </div>
                        <div className={styles.connect}>
                            <div>
                                <span className={"primary-text-color"} style={{fontSize: "14px"}}>169 ₽/мес</span>
                            </div>
                            <div className={`${styles.try} ${"active"}`}>
                                <span>Попробовать</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${"card"} ${styles.cardHover}`}>
                    <div className={styles.cardBody}>
                        <div className={styles.title}>
                            <div>
                                <div className={styles.icon}><Tv size={24}/></div>
                                <span className={"primary-text-color"} style={{fontSize: "18px", fontWeight: "700"}}>Unified TV</span>
                                <p className={"secondary-text-color"} style={{fontSize: "14px"}}>Фильмы и сериалы в высоком качестве.</p>
                            </div>
                        </div>
                        <div className={styles.connect}>
                            <div>
                                <span className={"primary-text-color"} style={{fontSize: "14px"}}>399 ₽/мес</span>
                            </div>
                            <div className={`${styles.connecting} ${"active"}`}>
                                <span>Попробовать</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;