import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/Home.module.scss';
import Intro from '../components/sections/intro/Intro';
import { useRef } from 'react';
import Footer from '../components/layout/footer/Footer';

export default function Home() {
  const caseStudiesRef = useRef();

  const handleClick = () => {
    caseStudiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main className={styles.home}>
        <Container>
          <Header />
        </Container>
        <Intro onClick={handleClick} />
        <Footer />
      </main>
    </>
  );
}
