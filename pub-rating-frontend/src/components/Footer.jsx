function Footer() {
    return (
      <footer className="bg-[#0a0f1c] text-yellow-500 border-t border-yellow-500 py-4 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex space-x-4">
            <a href="/" className="hover:underline hover:text-white transition">Home</a>
            <a href="/add-pub" className="hover:underline hover:text-white transition">Add Pub</a>
            <a href="/about-us" className="hover:underline hover:text-white transition">About Us</a>
          </div>
          <p className="text-center sm:text-right w-full sm:w-auto">© 2025 Pint Pal. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  