import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Linkedin, } from 'lucide-react'
import { Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-6 font-sans">
            <div className="mx-auto my-4 h-px w-11/12 bg-gradient-to-r from-[#0a0f1a] via-red-700 to-[#0a0f1a]"></div>
            <div className="flex w-full justify-end md:justify-end">
                <div className="text-sm py-8 flex flex-col items-center md:items-end lg:mr-20 mr-5 w-full md:w-auto">
                    <span className="mb-2">Follow us on Social Media</span>
                    <div className="flex items-center space-x-3 mt-2 justify-center md:justify-end">
                        <a href="#" className="hover:text-gray-300" aria-label="X (Twitter)">
                            <Twitter />
                        </a>
                        <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                            <Instagram />
                        </a>
                                                <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto my-4 h-px w-11/12 bg-gradient-to-r from-[#0a0f1a] via-red-700 to-[#0a0f1a]"></div>
            <div className="flex flex-col items-center text-center text-xs mt-4 w-11/12 mx-auto md:flex-row md:justify-between md:items-center md:text-left md:text-xs">
                <div className="mb-2 md:mb-0">© All rights reserved. Powered by Jaypee Labs 2020</div>
                <div className="flex space-x-2 justify-center md:justify-end">
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer