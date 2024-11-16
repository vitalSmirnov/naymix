import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './Layout'
import { RoutesEnum } from './routes.ts'

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
          element={false ? <DefaultLayout /> : <Navigate to={RoutesEnum.LOGIN} />}
        />
        <Route
          path='*'
          element={<Navigate to={RoutesEnum.DEFAULT} />}
        />
        <Route
          path='/'
          element={<ProfilePage />}
          children={
            <>
              <Route
                path={RoutesEnum.COMPARING}
                element={<ComparingPage />}
              />
              <Route
                path={RoutesEnum.TEAM}
                element={<TeamPage />}
              />
              <Route
                path={RoutesEnum.ADD_TEAM}
                element={<AddTeamPage />}
              />
              <Route
                path={RoutesEnum.APPLICANT}
                element={<MemberPage />}
              />
              <Route
                path={RoutesEnum.EMPLOYEE}
                element={<EmployeePage />}
              />
              <Route
                path={RoutesEnum.ADD_APPLICANT}
                element={<EmployeePage />}
              />
              <Route
                path={RoutesEnum.ADD_EMPLOYEE}
                element={<EmployeePage />}
              />
            </>
          }
        />
        <Route
          path={RoutesEnum.LOGIN}
          element={<LoginPage />}
        />
        <Route
          path={RoutesEnum.SIGNIN}
          element={<RegistrationPage />}
        />
      </Routes>
    </Suspense>
  )
}
