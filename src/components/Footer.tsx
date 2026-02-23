export function Footer() {
  return (
    <footer className="bg-obsidian py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-gold rounded-sm flex items-center justify-center">
              <span className="text-obsidian font-serif font-bold text-xl">A</span>
            </div>
            <span className="font-serif text-xl font-semibold tracking-wide text-white">
              APEX <span className="text-gold-500">MORTGAGE</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="mailto:nexsines@gmail.com" className="text-gray-400 hover:text-gold-500 transition-colors">nexsines@gmail.com</a>
            <a href="https://wa.me/918003572951" className="text-gray-400 hover:text-gold-500 transition-colors">+91 8003572951</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Apex Mortgage Growth. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
