/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "account/assets/content.tsx"
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260502.0.2.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import type { MenuItem } from "../root/PageNav";
import { LayoutGrid, User, Shield, Smartphone } from "lucide-react";

export const content: MenuItem[] = [
    { label: "личный кабинет", isHeader: true},
    { label: "Главная", path: "", icon: <LayoutGrid size={20} /> },
    { label: "Личные данные", path: "personal-info", icon: <User size={20} /> },
    { label: "Безопасность", path: "account-security", icon: <Shield size={20} /> },
    { label: "Сервисы", path: "services", icon: <LayoutGrid size={20} /> },
    { label: "Устройства", path: "devices", icon: <Smartphone size={20} /> }
];

export const SECTIONS_CONFIG = [
    [{ name: "URL", label: "URL аватара"}],
    [{ name: "firstName", label: "Имя" }, { name: "lastName", label: "Фамилия" }],
    [{ name: "username", label: "Никнейм" }],
    [{ name: "header", label: "Контакты"}],
    [{ name: "email", label: "Email" }],
    [{ name: "phoneNumber", label: "Телефон" }]
]
