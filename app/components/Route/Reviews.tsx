import { styles } from "@/app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "John Maxwell",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Project Manager | GlobalTech Corp.",
    comment:
      "I had the pleasure of exploring Hamra Academy, a platform that offers courses focusing on project management and personal growth. I was thoroughly impressed by the structured approach to managing complex projects and the insightful personal development resources. If you're looking to enhance your career and leadership skills, I highly recommend checking out Hamra Academy!",
  },
  {
    name: "Maria Lopez",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Leadership Coach | Personal Growth Institute",
    comment:
      "Thanks to Hamra Academy, I gained a deeper understanding of project management and personal growth strategies. The courses helped me develop essential skills to manage projects effectively and grow as a leader. The course materials and practical lessons are top-notch, and the guidance I received was invaluable.",
  },
  {
    name: "Chris Williams",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Business Analyst | TechPro Solutions",
    comment:
      "Hamra Academy offers a unique blend of project management and personal growth training that has transformed my approach to leadership. The practical insights and tools I've learned are helping me both in my professional career and in my personal life. Highly recommend it to anyone looking to take charge of their career and projects!",
  },
  {
    name: "Anna Kim",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Web Developer | Jakarta",
    comment:
      "I had the opportunity to take courses at Hamra Academy, and I must say, the focus on project management was incredibly beneficial. The lessons on planning, execution, and leadership have given me confidence in managing my own projects, both in tech and in personal growth.",
  },
  {
    name: "Robert Brown",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    profession: "Senior Software Engineer | InnovateTech",
    comment:
      "The content at Hamra Academy is incredible. I especially appreciated the long, detailed videos that break down complex concepts of project management and personal growth. These courses empower learners to handle real-world projects and challenges with confidence. I can't wait for more lessons!",
  },
  {
    name: "Emily Turner",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Marketing Manager | GreenTech",
    comment:
      "Joining Hamra Academy was the best decision I made for my career growth. The courses on project management helped me become a more organized and effective project manager, while the personal growth lessons have helped me develop the mindset needed to take my career to the next level.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src={require("../../../public/assests/business-img.png")}
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            At Hamra Academy, we empower our students to grow both professionally
            and personally. With a focus on project management and leadership,
            our courses help you unlock your full potential. Here&apos;s what some of
            our students have to say about their experiences!
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:!mt-[-60px] md:[&>*:nth-child(6)]:!mt-[-20px]">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
