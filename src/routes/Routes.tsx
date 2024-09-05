import React, { memo, Suspense } from 'react'
import SignUp from '../pages/SignUp'
import { useRoutes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import HomePage from '../pages/HomePage/HomePage'

export enum RoutePath {
    HOME = "/",
    SIGN_UP = "/sign-up",
    DASHBOARD = "/dashboard"
}

const Routes = () => {
    const routes = useRoutes([
        {
            path: RoutePath.HOME,
            element:
                <HomePage />
        },
        {
            path: RoutePath.SIGN_UP,
            element:
                <SignUp />
        },
        {
            path: RoutePath.DASHBOARD,
            element:
                <Dashboard />
        },
    ])
    return (
        <Suspense>
            {routes}
        </Suspense>
    )
}

export default memo(Routes)