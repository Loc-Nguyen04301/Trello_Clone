import React, { memo, Suspense } from 'react'
import SignUp from '../pages/SignUp'
import { useRoutes } from 'react-router-dom'
export enum RoutePath {
    HOME = "/",
    SIGN_UP = "/sign-up",
}

const Routes = () => {
    const routes = useRoutes([
        {
            path: RoutePath.SIGN_UP,
            element:
                <SignUp />
        },
    ])
    return (
        <Suspense>
            {routes}
        </Suspense>
    )
}

export default memo(Routes)