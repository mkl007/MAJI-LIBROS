import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"

export const Footer = () => {
    return (
        <div className="w-full bg-gray-800 z-50 py-14 bottom-0 relative inset-0 font-type">
            <div className="flex justify-center items-center h-full">
                <div className="text-white text-lg">
                    <p>© 2025 MagiBooks. All rights reserved.</p>
                    <p>Follow us on:</p>
                    <div className="space-x-12 mt-2 inline-flex justify-center">
                        <Link to={'https://www.facebook.com/profile.php?id=100009143951990'} className="text-blue-400 hover:underline"> <FaFacebook/> </Link>
                        <Link to={'https://www.instagram.com/jonathan_berbi/'} className="text-blue-400 hover:underline"> <FaInstagram/></Link>
                        <Link to={"https://www.linkedin.com/in/maikel-emeterio-berbi-11a7301b0/"} className="text-blue-400 hover:underline"><FaLinkedin/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
