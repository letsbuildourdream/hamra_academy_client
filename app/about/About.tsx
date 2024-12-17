import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">Hamra Academy?</span>
      </h1>
      
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to enhance your career with essential skills in project management and personal growth? Look no further than Hamra Academy, the premier online learning platform dedicated to empowering individuals like you to unlock their true potential.
          <br />
          <br />
          As the founder and CEO of Hamra Academy, I understand the challenges of career development and personal growth in today&rsquo;s competitive world. That&rsquo;s why I created Hamra Academy &ndash; to provide you with top-tier resources, expert-led courses, and a community committed to helping you succeed in your professional and personal life.
          <br />
          <br />
          At Hamra Academy, we offer a wide range of carefully crafted courses designed to give you the tools you need to excel in project management, leadership, and personal development. Whether you&rsquo;re just starting or looking to advance your skills, our affordable and high-quality courses will guide you every step of the way.
          <br />
          <br />
          Our platform is more than just about learning; it&rsquo;s about creating an environment where students can thrive. With expert-led training, hands-on exercises, and a supportive community, Hamra Academy ensures that you have everything you need to become a successful project manager or reach your personal growth goals.
          <br />
          <br />
          We believe that learning should be accessible to everyone, regardless of background or financial situation. That&rsquo;s why our courses are priced affordably &ndash; because everyone deserves the opportunity to learn and grow.
          <br />
          <br />
          But Hamra Academy is not just a learning platform; it&rsquo;s a community of like-minded individuals who are dedicated to supporting each other&rsquo;s growth. Our forum, mentorship programs, and networking opportunities provide you with the guidance and inspiration you need to accelerate your career and personal development.
          <br />
          <br />
          With Hamra Academy, you&rsquo;re not just learning &ndash; you&rsquo;re taking the first step towards becoming a leader in your field. Whether you want to improve your project management skills, build your leadership qualities, or achieve personal growth, we&rsquo;re here to help you succeed.
          <br />
          <br />
          So what are you waiting for? Join the Hamra Academy family today and start your journey towards a more fulfilling career and life. With our professional courses, personal development resources, and supportive community, the possibilities are endless.
        </p>
        <br />
        <span className="text-[22px]">Jafar Hamra</span>
        <h5 className="text-[18px] font-Poppins">
          Founder and CEO of Hamra Academy
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
