import React from 'react'
import { FaFacebook, FaInstagramSquare, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-[#003893] text-white font-serif py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nepal Travel Guide</h3>
              <p className="text-gray-300">Your gateway to the Himalayas</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Home</a></li>
                <li><a href="#" className="hover:text-gray-300">Destinations</a></li>
                <li><a href="#" className="hover:text-gray-300">Tours</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Kathmandu, Nepal</li>
                <li>Phone: +977 1234567</li>
                <li>Email: info@nepalguide.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">Facebook</a>
                <a href="#" className="hover:text-gray-300">Instagram</a>
                <a href="#" className="hover:text-gray-300">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer