// src/components/Navbar.jsx

export default function Navbar({ search, setSearch }) {
  const styles = {
    header: "bg-eneba-purple-primary w-full sticky top-0 z-50 py-3",
    container: "max-w-6xl mx-auto px-6 flex items-center justify-between gap-6",

    // LOGO GROUP
    logoSection: "flex items-center gap-2 cursor-pointer",
    logoImg: "w-8 h-8 object-contain",
    brandName: "text-2xl font-black tracking-tighter text-white lowercase leading-none",

    // SEARCH AREA
    searchBox: "relative flex items-center", 
    searchIcon: "absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 object-contain pointer-events-none",
    searchInput: "w-[525px] bg-transparent text-white border-2 border-white rounded-sm py-3 pl-11 pr-10 text-[16px] outline-none focus:border-eneba-green-accent transition-colors placeholder:text-white/40 leading-none",
    
    // CLEAR BUTTON STYLE
    clearButton: "absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-white text-[20] cursor-pointer transition-colors select-none",

    // PICKER GROUP (Language/Currency)
    pickerWrapper: "hidden md:flex items-center gap-2 cursor-pointer group h-full",
    flagCircle: "w-8 h-8 rounded-full overflow-hidden border border-white/20 flex-shrink-0",
    flagImg: "w-full h-full object-cover",
    pickerText: "text-[12px] font-bold text-white whitespace-nowrap group-hover:text-white leading-none",

    // RIGHT NAV
    rightNav: "flex items-center gap-3 text-white h-full",
    wishlistIcon: "text-[35px] cursor-pointer hover:text-eneba-blue-accent transition-colors leading-[0] mt-[-4px]", 
    cartImg: "w-8 h-8 object-contain cursor-pointer hover:opacity-80 transition-opacity",
    userProfile: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10 hover:border-white/40 cursor-pointer"
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        
        {/* LEFT GROUP */}
        <div className="flex items-center gap-4">
          
          <div className={styles.logoSection}>
            <img 
              src="https://res.cloudinary.com/drlazz7oy/image/upload/v1767277187/eneba-Photoroom_nrxx14.png" 
              alt="Eneba Logo" 
              className={styles.logoImg}
            />
            <span className={styles.brandName}>eneba</span>
          </div>

          <div className={styles.searchBox}>
            <img 
              src="https://res.cloudinary.com/drlazz7oy/image/upload/v1767278571/image-Photoroom_5_rhcext.png" 
              className={styles.searchIcon}
              alt=""
            />
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            
            {/* CONDITIONAL CLEAR BUTTON */}
            {search && (
              <button 
                onClick={() => setSearch('')}
                className={styles.clearButton}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          <div className={styles.pickerWrapper}>
            <div className={styles.flagCircle}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" 
                alt="EU Flag" 
                className={styles.flagImg}
              />
            </div>
            <div className={styles.pickerText}>
              English EU | EUR
            </div>
          </div>
        </div>

        {/* RIGHT GROUP */}
        <div className={styles.rightNav}>
          <div className={styles.wishlistIcon} title="Wishlist">♡</div>
          
          <img 
            src="https://res.cloudinary.com/drlazz7oy/image/upload/v1767278182/Screenshot_14-Photoroom_wd59hl.png" 
            alt="Shopping Cart" 
            className={styles.cartImg}
          />

          <div className={styles.userProfile} title="Profile">
            <span className="text-xs">👤</span>
          </div>
        </div>

      </div>
    </header>
  );
}