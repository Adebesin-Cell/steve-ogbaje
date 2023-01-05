import Head from 'next/head';
import AboutMe from '../components/about/AboutMe';
import Header from '../components/layout/header/Header';
import Container from '../components/ui/container/Container';
import styles from '../styles/About.module.scss';

const About = function () {
  return (
    <>
      <>
        <Head>
          <title>About | Steve - Steve Ogbaje</title>
          <meta
            name='description'
            content='Steve is a Technical Product Manager,I am passionate about solving real-life problems, through working with across the entire agile team to provide those solution.'
          />
          <meta
            property='og:title'
            content='About | Steve - Steve Ogbaje'
            key='title'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main className={styles.about}>
          <Container>
            <Header />
          </Container>
          <Container>
            <h1 className={styles.about__heading}>ABOUT ME</h1>
          </Container>
          <AboutMe />
        </main>
      </>
    </>
  );
};

export default About;
