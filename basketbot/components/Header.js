import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import styles from './Styles/header.module.css';

export default function Header () {
    const { data: session } = useSession();
  console.log(session);
    const handleSignin = (e) => {
      e.preventDefault()
      signIn()
    }
  
    const handleSignout = (e) => {
      e.preventDefault()
      signOut()
    }
  
    return (
      <div className={styles.mainHeader}>
        <Link href='/'>
          <a className='logo'>Home</a>
        </Link>
        {session && <a href="#" onClick={handleSignout} className="btn-signin">Sign out</a>  }
        {!session && <a href="#" onClick={handleSignin}  className="btn-signin">Sign in</a>  }
      </div>
    )
  }