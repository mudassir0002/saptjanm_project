import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SaptJanm</h3>
            <p className="text-gray-400">
              Connecting hearts through modern matchmaking.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog'].map((item) => (
                <li key={item} className="hover:text-pink-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item} className="hover:text-pink-500 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">contact@saptjanm.com</p>
            <p className="text-gray-400">+91 98765 43210</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SaptJanm. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;