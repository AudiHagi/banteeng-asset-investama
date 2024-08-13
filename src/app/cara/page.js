'use client'; // This directive marks the component as a client component

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

const Home = () => {
  const router=useRouter()

  return (
      <div>
        <div onClick={()=>{ router.push('/login')}}>test</div>
      </div>
  );
};

export default Home;
