// src/components/GameCard.jsx

export default function GameCard({ game }) {
  const hasCashback = game.cashback_value > 0;
  const hasDiscount = game.discount_value && game.discount_value > 0;

  const cardWrapperClasses = `
    bg-eneba-purple-secondary rounded shadow-lg overflow-hidden flex flex-col group cursor-pointer 
    hover:-translate-y-1 transition-all duration-200 border-2
    ${hasCashback ? 'border-eneba-blue-accent' : 'border-transparent'}
  `;

  const styles = {
    imageBox: "relative aspect-[2/3] w-full overflow-hidden bg-gray-800",
    gameImage: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",

    badgeStack: "absolute bottom-0 left-0 right-0 flex flex-col gap-1.5",
    cashbackBadge: "w-1/3 h-6 bg-eneba-blue-accent text-[10px] font-[800] text-eneba-dark-text flex items-center justify-center uppercase",
    platformBadge: "w-full h-5 bg-black/60 backdrop-blur-sm text-white px-3 flex items-center justify-center gap-2",

    logoIcon: "w-3 h-3 object-contain",
    platformName: "text-[9px] font-bold tracking-wide uppercase",

    // detailsArea handles the layout spacing
    detailsArea: "p-[15px] pb-[3px] flex flex-col justify-between flex-1",

    // Header Group (Rows 1-2)
    headerGroup: "flex flex-col gap-1",
    Title: "text-[12px] font-[800] leading-tight line-clamp-2 text-white",
    Region: "text-[12px] font-[800] uppercase text-eneba-blue-accent/90 pb-[5px] pt-[2px]",

    // Footer Group (Rows 3-7)
    footerGroup: "flex flex-col",
    Pricing: "leading-[1.7] flex items-center gap-1 text-[12px]",
    discountGreen: "text-eneba-green-accent font-bold",

    MainPrice: "flex items-center gap-[5px]",
    bigPrice: "leading-[1] text-[22px] font-bold text-white",
    Cashback: "text-[12px] font-bold text-eneba-green-accent",

    Wishlist: "flex items-center gap-[2px]",
    heartIcon: "text-[25px] text-white/50",
    wishlistText: "text-[12px] text-white/50"
  };

  const priceBeforeDiscount = hasDiscount
    ? (game.price / (1 - game.discount_value / 100)).toFixed(2)
    : null;

  return (
    <div className={cardWrapperClasses}>
      {/* IMAGE SECTION */}
      <div className={styles.imageBox}>
        <img src={game.game_picture} alt={game.game_name} className={styles.gameImage} />

        {/* BADGE OVERLAY SYSTEM */}
        <div className={styles.badgeStack}>
          {/* CASHBACK BADGE */}
          {game.cashback && (
            <div className={styles.cashbackBadge}>
              CASHBACK
            </div>
          )}

          {/* PLATFORM BADGE */}
          <div className={styles.platformBadge}>
            {game.platform_logo && (
              <img
                src={game.platform_logo}
                alt={game.platform}
                className={styles.logoIcon}
              />
            )}
            <span className={styles.platformName}>{game.platform}</span>
          </div>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className={styles.detailsArea}>

        {/* HEADING CONTENT (Rows 1-2) */}
        <div className={styles.headerGroup}>
          <h3 className={styles.Title}>
            {game.game_name} {game.platform} Key {game.region}
          </h3>
          <div className={styles.Region}>{game.region}</div>
        </div>

        {/* FOOTER CONTENT (Rows 3-7) */}
        <div className={styles.footerGroup}>
          {/* Row 3: Discount Logic */}
          {hasDiscount ? (
            <div className={styles.Pricing}>
              <span className="opacity-60">From </span>
              <span className="line-through opacity-60">€{priceBeforeDiscount}</span>
              <span className={styles.discountGreen}> -{game.discount_value}%</span>
            </div>
          ) : (
            <div className={styles.Pricing}>
              <span className="opacity-60">From</span>
            </div>
          )}

          {/* Row 5: Big Price */}
          <div className={styles.MainPrice}>
            <span className={styles.bigPrice}>€{game.price}</span>
            <span className="opacity-50 text-xs">ⓘ</span>
          </div>

          {/* Row 6: Cashback Row */}
          {hasCashback ? (
            <div className={styles.Cashback}>
              Cashback: €{game.cashback_value}
            </div>
          ) : null}

          {/* Row 7: Wishlist Row */}
          <div className={styles.Wishlist}>
            <span className={styles.heartIcon}>♡</span>
            <span className={styles.wishlistText}>{game.wishlist_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
}