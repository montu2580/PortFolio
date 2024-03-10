import s from './TechSkills.module.scss';
import { FaHtml5, FaCss3Alt, } from 'react-icons/fa';
import { BiLogoTailwindCss,} from "react-icons/bi";
import {  SiExpress} from  "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
} from 'react-icons/di';
import { FaBootstrap } from "react-icons/fa6";
import {
 
  SiRedux,
  
  
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon} >
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <FaHtml5/>
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <FaCss3Alt />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <BiLogoTailwindCss />
      </li>
      <li className={s.techIcon}>
        <FaBootstrap />
      </li>
      <li className={s.techIcon}>
        <SiExpress />
      </li>
    </ul>
  );
};

export default TechSkills;
