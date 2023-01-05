import styles from './Intro.module.scss';
import Container from '../../ui/container/Container';
import Image from 'next/image';
import {
  BehanceIcon,
  DribbbleIcon,
  FlowIcon,
  LinkedInIcon,
  TwitterIcon
} from '../../../utils/icons/Icons';
import Avatar from '../../avatar/Avatar';

const Intro = function (props) {
  return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.intro__wrapper}>
          <Container>
            <div className={styles.intro__container}>
              <div className={styles.intro__content}>
                <h1 className={styles.intro__heading}>
                  <span>Steve is a</span>
                  <span>Technical Product Manager</span>
                </h1>
                <p className={styles.intro__paragraph}>
                  I am passionate about solving real-life problems, through
                  working with across the entire agile team to provide those
                  solution.
                </p>
                <ul className={styles.intro__list}>
                  <li className={styles.intro__item}>
                    <a
                      href='https://www.linkedin.com/in/stephen-annozie-ogbaje/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <LinkedInIcon />
                    </a>
                  </li>
                  <li className={styles.intro__item}>
                    <a
                      href='https://twitter.com/iamsirsteve'
                      target='_blank'
                      rel='noopener noreferrer'
                      className={styles.intro__link}
                    >
                      <TwitterIcon />
                    </a>
                  </li>
                </ul>
              </div>
              <Avatar className={styles['intro__image-box']} />
            </div>
          </Container>
        </div>
        <div className={styles.intro__flow}>
          <FlowIcon onClick={props.onClick} />
        </div>
      </Container>
    </section>
  );
};

export default Intro;
