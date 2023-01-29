import Image from "next/image"
import Logo from '../static/logo.png'
const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#FCC017]',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'object-contain cursor-pointer',
    bannerNav: 'flex cursor-pointer items-center space-x-5',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full'
}

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>

        <div className={styles.logoContainer}>
          <Image src={Logo} alt="Medium Logo" className={styles.logo} height={40} width={200} />
        </div>

        <div className={styles.bannerNav}>
            <div>
                Our Story
            </div>
            <div>
                Membership
            </div>
            <div>
                Sign In
            </div>
            <div className={styles.accentedButton}>
                Get Started
            </div>
        </div>
      </div>
    </div>
  )
}
export default Header