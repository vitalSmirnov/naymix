import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout'

const LoginPage = lazy(() => import('../../pages/Login/index.tsx'))
const RegistrationPage = lazy(() => import('../../pages/Registration/index.tsx'))
const AddTeamPage = lazy(() => import('../../pages/AddTeam/index.tsx'))
const ComparingPage = lazy(() => import('../../pages/Comparing/index.tsx'))
const EmployeePage = lazy(() => import('../../pages/Employee/index.tsx'))
const MemberPage = lazy(() => import('../../pages/Member/index.tsx'))
const ProfilePage = lazy(() => import('../../pages/Profile/index.tsx'))
const TeamPage = lazy(() => import('../../pages/Team/index.tsx'))

export const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route
          index
          element={true ? <DefaultLayout /> : <Navigate to={'/login'} />}
        />
        <Route
          path='*'
          element={<Navigate to={'profile'} />}
        />
        <Route
          path='/'
          element={<Navigate to={'profile'} />}
          children={
            <>
              <Route
                index
                element={<ProfilePage />}
              />
              <Route
                path='comparing'
                element={<ComparingPage />}
              />
              <Route
                path='team'
                element={<TeamPage />}
              />
              <Route
                path='team/add'
                element={<AddTeamPage />}
              />
              <Route
                path='team/member/:id'
                element={<MemberPage />}
              />
              <Route
                path='team/employee/:id'
                element={<EmployeePage />}
              />
            </>
          }
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/signin'
          element={<RegistrationPage />}
        />
      </Routes>
    </Suspense>
  )
}
