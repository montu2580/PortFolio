import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaInstagram 
  
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
            I excel in Data Structures and Algorithms (DSA) and  <br />possess a strong command over the MERN stack.
             <br />
              With my problem-solving skills and expertise in DSA, <br/> I confidently tackle complex coding challenges. 
            </p>

            <p>
              My skills include proficiency in{' '}
              <i>
                <b className={s.purple}>
                MongoDB, Express.js, React.js, <br />and  Node.js
                </b>
              </i>
              <br />
              Let's connect and explore exciting opportunities together. <br />
            
            </p>

            <p>
            My goal is to apply my knowledge and contribute to 
              <i>
                <b className={s.purple}> Innovative Projects. </b>
              </i>
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/montu2580"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
        
          
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/gaurakh-nath/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.instagram.com/mr_montu_2580/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
