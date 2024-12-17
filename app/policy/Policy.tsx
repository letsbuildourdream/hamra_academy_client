import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Conditions
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Welcome to Hamra Academy! By using our platform, you agree to comply with the following terms and conditions designed to ensure a secure and enriching learning environment.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            1. User Accounts: Users must create an account to access courses and resources. You are responsible for maintaining the confidentiality of your credentials and ensuring proper use of your account.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            2. Course Content: Hamra Academy offers premium courses on Project Management and Personal Growth. All content, including videos, written materials, and resources, is protected under copyright laws and is for personal use only.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            3. Intellectual Property: All materials provided through Hamra Academy are the intellectual property of the platform. Redistribution, reproduction, or unauthorized use of these materials is strictly prohibited.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            4. Platform Usage: Users are expected to engage respectfully with fellow learners and instructors. Any form of harassment, inappropriate behavior, or violation of community guidelines will result in account suspension or termination.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            5. Refund Policy: If you are not satisfied with a course, you may request a refund within 14 days of purchase, provided you have not completed more than 20% of the course content.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            6. Course Updates: Hamra Academy reserves the right to update or modify course content to improve the learning experience. Notifications regarding major changes will be shared with enrolled users.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            7. Liability: Hamra Academy is not responsible for outcomes resulting from the application of knowledge gained from our courses. Users are advised to exercise professional judgment while applying the concepts taught.
          </p>
          <br />
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            By using Hamra Academy, you agree to these terms and conditions. Thank you for choosing us as your partner in Project Management and Personal Growth. Let&apos;s achieve greatness together!
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
