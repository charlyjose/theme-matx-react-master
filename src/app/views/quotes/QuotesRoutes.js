import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from '../../auth/authRoles'

const Quotes = Loadable(lazy(() => import('./Quotes')))

const quotesRoutes = [
    {
        path: '/quotes',
        element: <Quotes />,
        auth: authRoles.admin,
    },
]

export default quotesRoutes
