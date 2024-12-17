'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../app/utils/Heading';
import CourseAnalytics from "../../components/Admin/Analytics/CourseAnalytics";
import DashboardHeader from '../../../app/components/Admin/DashboardHeader';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading
         title="Hamra Academy - Admin"
         description="Hamra Academy is a platform for students to learn and get help from teachers"
         keywords="Project Management, Personal Growth, Leadership, Productivity, Team Collaboration, Career Development, Strategic Planning, Time Management, Goal Setting, Professional Skills"
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
               <DashboardHeader />
               <CourseAnalytics />
            </div>
        </div>
    </div>
  )
}

export default page