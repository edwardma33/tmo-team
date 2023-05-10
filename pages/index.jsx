import { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Profile from "../components/Profile"
import useWindow from "@/hooks/useWindow";
import team from "./api/teamInfo";

export default function Roster() {
  const mobileExperts = []

  for (let i = 0; i < team.length; i++) {
    if (i > 1) {
      mobileExperts.push(<Profile index={i} />)
    }
  }

  if (useWindow() >= 906) {
    return (
    <>
    <Head>
      <title>TMO on Houk | Roster</title>
    </Head>
    <Navbar />
    <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>Our Team</h1>
    <main className=" mx-auto">
      <div className=" columns-2 mb-4">
        <Profile index={0}/>
        <Profile index={1} />
      </div>
      {/* This div must be dynamic depending on how many mobile experts there are (columns) */}
      <div className=" columns-2 mb-4 mx-6">
        {mobileExperts.map(expert => {
          return expert
        })}
      </div>
    </main>
    </>
    )
  } else {
    return (
      <>
      <Navbar />
      <main className=" mx-auto">
        <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>Our Team</h1>
        <div className="">
          <Profile index={0}/>
          <Profile index={1} />
          {mobileExperts.map(expert => {
          return expert
          })}
        </div>
      </main>
      </>
      )
  }
  
}

