/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "account/root/Root.tsx"
 *
 * This file is provided by @keycloakify/keycloak-account-ui version 260502.0.2.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

// @ts-nocheck

import {
    ErrorPage,
    useEnvironment,
    KeycloakContext
} from "../../shared/keycloak-ui-shared";
import { Page, Spinner } from "@patternfly/react-core/dist/esm/components";
import { Suspense, useState, useEffect, useMemo } from "react";
import {
    createBrowserRouter,
    Outlet,
    RouteObject,
    RouterProvider
} from "react-router-dom";
import fetchContentJson from "../content/fetchContent";
import { Environment, environment } from "../environment";
import { usePromise } from "../utils/usePromise";
import { Header } from "./Header";
import { MenuItem, PageNav } from "./PageNav";
import { routes } from "../routes";

const AppLayout = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Page
            header={<Header />}
            sidebar={!isMobile ? <PageNav /> : null}
            isManagedSidebar={true}
        >
            <Suspense fallback={<Spinner />}>
                <Outlet />
            </Suspense>
        </Page>
    );
};

function mapRoutes(
    context: KeycloakContext<Environment>,
    content: MenuItem[]
): RouteObject[] {
    return content
        .map(item => {
            if ("children" in item) {
                return mapRoutes(context, item.children);
            }

            // Do not add route disabled via feature flags
            if (item.isVisible && !context.environment.features[item.isVisible]) {
                return null;
            }

            return {
                ...item,
                element:
                    "path" in item
                        ? routes.find(r => r.path === (item.id ?? item.path))?.element
                        : undefined
            };
        })
        .filter(item => !!item)
        .flat();
}

export const Root = () => {
    const context = useEnvironment<Environment>();
    const [content, setContent] = useState<RouteObject[]>();

    usePromise(
        signal => fetchContentJson({ signal, context }),
        content => {
            setContent([
                {
                    path: decodeURIComponent(new URL(environment.baseUrl).pathname),
                    element: <AppLayout />,
                    errorElement: <ErrorPage />,
                    children: mapRoutes(context, content)
                }
            ]);
        }
    );

    const router = useMemo(() => {
        if (!content) return null;
        return createBrowserRouter(content);
    }, [content]);

    if (!content || !router) {
        return <Spinner />;
    }

    return <RouterProvider router={router} />;
};
