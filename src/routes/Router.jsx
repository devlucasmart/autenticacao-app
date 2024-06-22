import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingCircularProgress from '../components/dashboard/LoadingCircularProgress';

// Use React.lazy para importar o componente dinamicamente
const SignInSide = lazy(() => import('../components/SignIn/SignInSide'));
const SignUp = lazy(() => import('../components/SignUp/SignUp'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingCircularProgress />}>
        <Routes>
          <Route exact path="/login" element={<SignInSide />} />
		  <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
