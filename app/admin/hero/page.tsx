'use client'
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import EditHero from "../../components/Admin/Customization/EditHero";

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Hamra Academy - Admin"
          description="Hamra Academy is a platform for students to learn and get help from teachers"
          keywords="Project Management, Personal Growth, Leadership, Productivity, Team Collaboration, Career Development, Strategic Planning, Time Management, Goal Setting, Professional Skills,Redux,Machine Learning"
        />
        <div className="flex h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%]">
            <DashboardHero />
           <EditHero />
          </div>
        </div>
      </AdminProtected>
    </div>
  )
}

export default page