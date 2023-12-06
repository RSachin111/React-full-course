// import React, { useState } from 'react'
import React from 'react'
import Link from 'next/link'
    // useState
const Header = () => {
  return (
    <div className='box'>
    <h2>logo</h2>
<div className='nav'>
<Link href='/About'>About</Link>
<Link href='/Contact'>Contact</Link>
<Link href='/Career'>Career</Link>
</div>
    
    </div>
  )
}

export default Header;