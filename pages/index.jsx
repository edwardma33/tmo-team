import { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Profile from "../components/Profile"
import useWindow from "@/hooks/useWindow";

export default function Roster() {
  if (useWindow() >= 900) {
    return (
    <>
    <Head>
      <title>TMO on Houk | Roster</title>
    </Head>
    <Navbar currentPage={0} />
    <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>Our Team</h1>
    <main className=" mx-auto">
      <div className=" columns-2 mb-4">
        <Profile person={'gary'}/>
        <Profile person={'maddox'} />
      </div>
      <div className=" columns-3 mb-4">
        <Profile person={'joey'} />
        <Profile person={'kyle'} />
        <Profile person={'ben'} />
      </div>
    </main>
    </>
    )
  } else {
    return (
      <>
      <Navbar currentPage={0} />
      <main className=" mx-auto">
        <h1 className=' font-poppins text-magenta text-6xl text-center pb-10'>Our Team</h1>
        <div className="">
          <Profile person={'gary'}/>
          <Profile person={'maddox'} />
          <Profile person={'joey'} />
          <Profile person={'kyle'} />
          <Profile person={'ben'} />
        </div>
      </main>
      </>
      )
  }
  
}

