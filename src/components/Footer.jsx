import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-olive-100">
      <div className="container mx-auto max-w-7xl px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="text-2xl font-bold text-olive-900 flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-olive-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-full"></div>
              </div>
              Olive
            </a>
            <p className="text-olive-800 max-w-sm mb-6">
              Keep your family safe with Olive. Effortless food scanning. Peace of mind for parents. Healthy product recommendations.
            </p>
            <button className="bg-olive-900 text-white px-6 py-3 rounded-full font-medium hover:bg-olive-800 transition-colors">
              Download for iOS
            </button>
          </div>

          <div>
            <h4 className="font-bold text-olive-900 mb-6">Explore More Tools</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Explore Foods</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Allergy Scanner App</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Gluten Free Scanner</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Dairy Free App</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Food Ingredient Checker</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-olive-900 mb-6">About</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Blog</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Email us</a></li>
              <li><a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Contact us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-olive-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-olive-800">© 2026 Olive Inc.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-olive-800 hover:text-olive-600 transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
