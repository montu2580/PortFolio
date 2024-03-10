import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Gaurakh Nath </span>
      
          
        
        <br />
        I am currently pursuing my Bachelor's degree in {' '}
        <br />
        Computer Science(B.E.) from MBM University.
        <br />
        <br />
        My academic journey has been focused on developing
        <br />
        a strong foundation in the field of CSE. 
        <br />
         I am dedicated to acquiring the knowledge and skills 
         <br />
         necessary to thrive in this dynamic and ever-evolving industry.
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Fitness 
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Riding
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
