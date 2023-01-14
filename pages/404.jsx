import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function NotFountPage() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])
    return (
        <div className="not-found">
            <h1>Oh...</h1>
            <h2>This page is not here</h2>
            <p>Turn now to <Link href='/'>Main page</Link>in 5 seconds</p>
        </div>
    )
}

export default NotFountPage