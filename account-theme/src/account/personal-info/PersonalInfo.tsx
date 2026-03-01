/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "account/personal-info/PersonalInfo.tsx"
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260502.0.2.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    beerify,
    debeerify,
    setUserProfileServerError,
    useEnvironment
} from "../../shared/keycloak-ui-shared";
import { AlertVariant } from "@patternfly/react-core";
import { TFunction } from "i18next";
import { useState } from "react";
import { ErrorOption, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getPersonalInfo, getSupportedLocales, savePersonalInfo } from "../api/methods";
import { UserRepresentation } from "../api/representations";
import type { Environment } from "../environment";
import { TFuncKey} from "../i18n";
import { useAccountAlerts } from "../utils/useAccountAlerts";
import { usePromise } from "../utils/usePromise";
import styles from "./PersonalInfo.module.css"
import { Pencil } from 'lucide-react'
import { SECTIONS_CONFIG } from "../assets/content.tsx"
import { X } from "lucide-react"

export const PersonalInfo = () => {
    const { t } = useTranslation();
    const { keycloak } = useEnvironment();
    const [activeSection, setActiveSection] = useState<boolean>(false);
    const context = useEnvironment<Environment>();
    const form = useForm<UserRepresentation>({ mode: "onChange" });
    const { handleSubmit, reset, setValue, setError, register, watch, formState: { errors } } = form;
    const { addAlert } = useAccountAlerts();
    const watchedFirstName = watch("firstName");
    const watchedLastName = watch("lastName");
    const watchedUsername = watch("username");
    const watchedEmail = watch("email");

    usePromise(
        signal =>
            Promise.all([
                getPersonalInfo({ signal, context }),
                getSupportedLocales({ signal, context })
            ]),
        ([personalInfo]) => {
            reset(personalInfo);
            Object.entries(personalInfo.attributes || {}).forEach(([k, v]) =>
                setValue(`attributes[${beerify(k)}]`, v)
            );
        }
    );

    const onSubmit = async (user: UserRepresentation) => {
        try {
            const attributes = Object.fromEntries(
                Object.entries(user.attributes || {}).map(([k, v]) => [debeerify(k), v])
            );
            await savePersonalInfo(context, { ...user, attributes });
            await context.keycloak.updateToken(5);
            await refreshData();
            setActiveSection(null);
            addAlert(t("accountUpdatedMessage"));
        } catch (error) {
            addAlert(t("accountUpdatedError"), AlertVariant.danger);

            setUserProfileServerError(
                { responseData: { errors: error as any } },
                (name: string | number, error: unknown) =>
                    setError(name as string, error as ErrorOption),
                ((key: TFuncKey, param?: object) => t(key, param as any)) as TFunction
            );
        }
    };
    const handleFormSubmit = async (data: UserRepresentation) => {
        await onSubmit(data);
        setActiveSection(null);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setActiveSection(null);
        }
    };

    const refreshData = async () => {
        try {
            const personalInfo = await getPersonalInfo({ context });
            const locales = await getSupportedLocales({ context });

            setUserProfileMetadata(personalInfo.userProfileMetadata);
            setSupportedLocales(locales);

            reset(personalInfo);

            Object.entries(personalInfo.attributes || {}).forEach(([k, v]) =>
                setValue(`attributes[${beerify(k)}]`, v)
            );

            console.log("Данные успешно обновлены в UI");
        } catch (error) {
            console.error("Ошибка при обновлении данных:", error);
        }
    };

    return (
        <div className={"page"}>
            <div className="page-header">
                <span style={{fontSize: "24px"}} className={"primary-text-color"}>Личные данные</span>
                <span style={{fontSize: "16px"}} className={"secondary-text-color"}>Основная информация, используемая в сервисах Unified ID.</span>
            </div>
            <div className={"card"}>
                <div className={styles.cardHeader}>
                    <div>
                        <p className={"primary-text-color"}>Основная информация</p>
                        <p style={{fontSize: "14px"}} className={"secondary-text-color"}>Некоторые данные могут быть видны другим пользователям.</p>
                    </div>
                    <div className={`${styles.buttonChange} ${"primary-text-color"} ${"active"}`} onClick={() => setActiveSection(true)}>
                        <Pencil size={16}/>
                        <p>Редактировать всё</p>
                    </div>
                </div>
                <div className={styles.cardInfo} style={{padding: "14px 0 5px"}}>
                    <p className={"secondary-text-color"}>ФОТО</p>
                    <div className={styles.changePhoto}>
                        <img className={styles.avatar} src={"https://fastly.picsum.photos/id/267/200/200.jpg?hmac=Y1nyfMYjg-MPsZP0aKx1TqI1ogQRSYtHkM5kpZpybqk"} alt="avatar"/>
                        <p className={`${"secondary-text-color"} ${styles.none}`}>Фото помогает персонализировать ваш аккаунт</p>
                    </div>
                </div>
                <div className={`${styles.cardInfo} ${styles.border}`}>
                    <p className={"secondary-text-color"}>ИМЯ</p>
                    <p style={{fontSize: "16px", width: "65%"}} className={"primary-text-color"}>{watchedFirstName || keycloak.tokenParsed?.given_name || "Имя"} {watchedLastName || keycloak.tokenParsed?.family_name || "Фамилия"}</p>
                </div>
                <div className={styles.cardInfo}>
                    <p className={"secondary-text-color"}>НИКНЕЙМ</p>
                    <p style={{fontSize: "16px", width: "65%"}} className={"primary-text-color"}>@{watchedUsername || keycloak.tokenParsed?.preferred_username || "Пользователь"}</p>
                </div>
            </div>
            <div className={"card"}>
                <div className={styles.cardHeader}>
                    <p className={"primary-text-color"}>Контактная информация</p>
                </div>
                <div className={styles.cardInfo}>
                    <p className={"secondary-text-color"}>EMAIL</p>
                    <div className={styles.cardEmail}>
                        <p style={{fontSize: "16px"}} className={"primary-text-color"}>{watchedEmail || keycloak.tokenParsed?.email || "email"}</p>
                        <p style={{color: "#4ade80", fontSize: "12px"}}>Подтверждена</p>
                    </div>
                </div>
                <div className={`${styles.cardInfo} ${styles.border}`} style={{borderBottom: "none"}}>
                    <p className={"secondary-text-color"}>ТЕЛЕФОН</p>
                    <p style={{fontSize: "16px", width: "65%"}} className={"primary-text-color"}>+7 900 123-45-67</p>
                </div>
            </div>
            {activeSection && (
                <div className={styles.overlay} onClick={handleOverlayClick}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <p style={{fontSize: "18px"}} className={"primary-text-color"}>Изменение личных данных</p>
                            <div onClick={() => setActiveSection(null)} className={"secondary-text-color"}><X size={20}/></div>
                        </div>

                        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.modalContent}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img className={styles.avatar} style={{height: "90px"}} src={"https://fastly.picsum.photos/id/267/200/200.jpg?hmac=Y1nyfMYjg-MPsZP0aKx1TqI1ogQRSYtHkM5kpZpybqk"} alt="avatar"/>
                            </div>
                            {SECTIONS_CONFIG.map((row, index) => {
                                const isHeader = row[0].name === "header";

                                if (isHeader) {
                                    return (
                                        <div key={index} className={styles.headerRow}>
                                            <p className={styles.headerText}>{row[0].label}</p>
                                        </div>
                                    );
                                }

                                return (
                                    <div key={index} className={styles.row}>
                                        {row.map((inp) => (
                                            <div key={inp.name} className={styles.field}>
                                                <label>{inp.label}</label>
                                                <input
                                                    {...register(inp.name as any)}
                                                />
                                                {errors[inp.name] && (
                                                    <span>Ошибка заполнения</span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}

                            <div className={styles.modalFooter}>
                                <button type="button" onClick={() => setActiveSection(null)} className={`${styles.cancelBtn} ${"active"}`}>
                                    Отмена
                                </button>
                                <button type="submit" className={`${styles.saveBtn} ${"active"}`}>
                                    Сохранить изменения
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalInfo;
