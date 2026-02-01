import Image from "next/image"
import Link from "next/link"

const Logo = ({className = ''}: {
    className?: string
}) => {
  return (
    <Link href={'/'}>
      <Image className={`${className}`} src={'/img/logo/qchat-logo.png'} width={150} height={40} alt="qchat logo"/>
    </Link>
  )
}

export default Logo