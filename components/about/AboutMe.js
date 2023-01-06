/* eslint-disable react/no-unescaped-entities */
import styles from './AboutMe.module.scss';
import Container from '../ui/container/Container';
import Avatar from '../avatar/Avatar';

const AboutMe = function () {
  return (
    <section className={styles.about}>
      <Container>
        <div className={styles.about__wrapper}>
          <div className={styles['about__box']}>
            <Avatar className={styles['about__image-box']} />
          </div>
          <div className={styles['about__box']}>
            <p>
              A skilled, diligent, hardworking, and results-oriented individual
              who possesses a great deal of enthusiasm with high energy,
              creativity, and an excellent working attitude.An Experienced
              product Manager with some years to demonstrate such a skill in the
              field cutting across health, food, and finance-related services.
              Skilled in Project Management, Agile Software Development, Product
              Design, and Programming languages like python and javascript.
            </p>
            <p>
              I have a great ability to adapt to different working conditions,
              be it on my own or working as a team player. I am very passionate
              about building quality products using various technologies
              including Blockchain. I am very particular about clients/customers
              who are the end-users of these products, which are part of the
              main discussion I drive into my team during various sprint
              planning in order to achieve success. I have a solid background in
              software engineering which makes me balance and communicate well
              with my team especially the developers during project execution.
            </p>
            <p>
              I have a full understanding of team management in order to achieve
              the desired goal and mind of the stakeholders, I understand the
              importance of a timeline and how important the team should work
              toward delivery. I love to play musical instrument in my leisure
              time.
            </p>
          </div>
          <div className={styles['about__box']}>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Skills</h1>
              <li className={styles.about__item}>
                Good understanding of the Agile Methodology
              </li>
              <li className={styles.about__item}>API documentation</li>
              <li className={styles.about__item}>
                Tracking issue (Jira, azure board, github issues, trello, )
              </li>
              <li className={styles.about__item}>Graphics Design</li>
              <li className={styles.about__item}>Research</li>
              <li className={styles.about__item}>Wireframing</li>
              <li className={styles.about__item}>
                Programming: Javascript, Html,CSS, Python, DB(mysql, kubernetes,
                elastic search), Mongodb.
              </li>
              <li className={styles.about__item}>Customer support</li>
              <li className={styles.about__item}>Critical thinking</li>
              <li className={styles.about__item}>Business thinking</li>
            </ul>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Experience</h1>
              <li className={styles.about__item}>
                Technical Product manager at Parallescore
              </li>
              <li className={styles.about__item}>
                Technical Product manager at IQ.Wiki
              </li>
              <li className={styles.about__item}>
                Digital Product Manager at Garden ventures
              </li>
              <li className={styles.about__item}>
                Technical Product Manager at Cryptosmart
              </li>
              <li className={styles.about__item}>
                Technical Product Manager at Xcelsolution
              </li>
            </ul>
            <ul className={styles.about__list}>
              <h1 className={styles.about__title}>Socials</h1>
              <li className={styles.about__item}>
                <a
                  href='https://twitter.com/iamsirsteve'
                  className={styles.about__link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>
              </li>
              <li className={styles.about__item}>
                <a
                  href='https://twitter.com/AyomiposiUIUX'
                  className={styles.about__link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Instagram
                </a>
              </li>
            </ul>
            <ul className={styles.about__list}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                // eslint-disable-next-line react/no-unknown-property
                download
                href='/Stephen_ogbaje_Resume.pdf'
                className={styles.about__button}
              >
                Download Resume
              </a>
            </ul>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.contact}>
          <h1 className={styles.contact__heading}>Contact</h1>
          <div className={styles.contact__wrapper}>
            <div className={styles.contact__box}>
              <p className={styles.contact__paragraph}>
                Contact me and lets work together
              </p>
            </div>
            <div className={styles.contact__box}>
              <ul className={styles.contact__list}>
                <li className={styles.contact__item}>
                  <a
                    href='mailto:ogbajestephen94@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.contact__link}
                  >
                    ogbajestephen94@gmail.com
                  </a>
                </li>
                <li className={styles.contact__item}>
                  <a
                    href='https://www.linkedin.com/in/stephen-annozie-ogbaje/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.contact__link}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
