import { Route, Routes } from 'react-router-dom';

import { About } from './pages/about';
import { Contact } from './pages/contact';
import { Home } from './pages/home';
import { PageNotFound } from './pages/404';
import { Services } from './pages/services';
import { SignUp } from './pages/signUp';
import { SignIn } from './pages/signIn';

import { Navbar } from './components/Navbar/index';

import { Container, Hero } from './styles';
import { Footer } from './components/Footer';

export function AppRoutes() {
  return (
    <Container>
      <Navbar />
      <Hero>
        <Routes>
          <Route caseSensitive path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Hero>
      <Footer />
    </Container>
  );
}
