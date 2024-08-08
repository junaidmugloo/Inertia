import { Link } from '@inertiajs/react'
import React from 'react'

export default function Nav({children}) {
  return (
    <div>
        <header>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
        </header>
        <main>
            {children}
        </main>
    </div>
  )
}
