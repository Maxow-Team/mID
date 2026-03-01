/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "account/routes.tsx"
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260502.0.2.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const Main = lazy(() => import("./main/Main"));
const PersonalInfo = lazy(() => import("./personal-info/PersonalInfo"));
const AccountSecurity = lazy(() => import("./account-security/AccountSecurity"));
const Services = lazy(() => import("./services/Services"));
const Devices = lazy(() => import("./devices/Devices"));

export const MainRoute: RouteObject = {
    index: true,
    path: "",
    element: <Main />
};

export const PersonalInfoRoute: RouteObject = {
    path: "personal-info",
    element: <PersonalInfo />
}

export const AccountSecurityRoute: RouteObject = {
    path: "account-security",
    element: <AccountSecurity />
};

export const ServicesRoute: RouteObject = {
    path: "services",
    element: <Services/>
}

export const DevicesRoute: RouteObject = {
    path: "devices",
    element: <Devices/>
}


export const routes: RouteObject[] = [
    MainRoute,
    PersonalInfoRoute,
    AccountSecurityRoute,
    ServicesRoute,
    DevicesRoute
];
