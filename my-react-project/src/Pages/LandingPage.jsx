import Header from "../Components/Header"
import Landing from "../Components/Landing"
import Footer from "../Components/Footer"
import Opportunities from "../Components/Opportunities"
import { motion } from "framer-motion"

function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ willChange: 'transform' }}
            >
                <Landing />
            </motion.div>
            
            <div>
                <Opportunities />
            </div>
            
            <Footer />
        </div>
    )
}

export default LandingPage