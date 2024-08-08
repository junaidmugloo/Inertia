import React from 'react'

export default function Nav({children}) {
  return (
    <div>
        <header>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="about">About</a>
            </li>
        </ul>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}
