import React, { useState } from 'react';
import {
  BRAND_ASSETS,
  COMMUNITY_GALLERY,
  HANDCRAFTED_RANGE,
  MOOD_CARDS,
  PRODUCTS,
  ProductItem,
} from '../data/products';

interface MobileHomeProps {
  onNavigateToProduct: (product?: ProductItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    variant?: string;
    qty?: number;
  }) => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string, name: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onShowToast: (msg: string) => void;
}

const MOBILE_SWATCHES = [
  { name: 'Terracotta Blend', bg: 'bg-[#C46D5E]', textLight: true },
  { name: 'Sage Forest', bg: 'bg-[#8A9A86]', textLight: true },
  { name: 'Buttercream Dream', bg: 'bg-[#EAD89C]', textLight: false },
  { name: 'Dusty Rose', bg: 'bg-[#D4A5A5]', textLight: true },
];

export const MobileHome: React.FC<MobileHomeProps> = ({
  onNavigateToProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  cartCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onShowToast,
}) => {
  const [selectedShade, setSelectedShade] = useState('Terracotta Blend');
  const [configStep, setConfigStep] = useState<1 | 2 | 3>(1);
  const [nlSubscribed, setNlSubscribed] = useState(false);
  const [nlEmail, setNlEmail] = useState('');
  const [activeBottomTab, setActiveBottomTab] = useState('shop');

  return (
    <div className="bg-surface font-body text-on-surface flex flex-col min-h-screen antialiased relative">
      {/* HEADER */}
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-tertiary-container text-on-tertiary-container py-1.5 px-3 text-center text-[11px] font-label font-medium tracking-wide flex items-center justify-center gap-1.5 overflow-hidden">
          <span className="material-symbols-outlined text-[14px]">local_shipping</span>
          <span className="truncate">
            Free shipping on orders above ₹999 • Handmade with love in India
          </span>
        </div>
        <div className="h-14 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              aria-label="Menu"
              type="button"
              onClick={() => onNavigateToProduct(PRODUCTS[0])}
              className="w-11 h-11 flex items-center justify-center text-on-surface rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <img
              alt="Buni Crochet Logo"
              className="h-8 w-auto object-contain"
              src={BRAND_ASSETS.logo}
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-1">
            <button
              aria-label="Search"
              type="button"
              onClick={onOpenSearch}
              className="w-11 h-11 flex items-center justify-center text-on-surface rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">search</span>
            </button>
            <button
              aria-label="Wishlist"
              type="button"
              onClick={onOpenWishlist}
              className="w-11 h-11 flex items-center justify-center text-on-surface rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
            </button>
            <button
              aria-label="Cart"
              type="button"
              onClick={onOpenCart}
              className="w-11 h-11 flex items-center justify-center text-on-surface relative rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
              <span className="absolute top-2 right-2 min-w-[16px] h-4 bg-primary text-on-primary text-[10px] font-bold rounded-full flex items-center justify-center px-1">
                {cartCount}
              </span>
            </button>
            <img
              alt="Profile"
              onClick={() => onShowToast('Signed in as Ananya')}
              className="w-8 h-8 rounded-full object-cover ml-1 cursor-pointer"
              src={BRAND_ASSETS.profileAvatar}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col relative w-full pb-24 bg-surface">
        <div className="flex flex-col w-full text-on-surface">
          {/* 1. Editorial Hero Section */}
          <section className="relative px-4 pt-4 pb-8 flex flex-col gap-5">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-sm bg-surface-container-low min-h-[460px] flex flex-col justify-end p-5">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${BRAND_ASSETS.mobileHero}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent"></div>
              <div className="relative z-10 flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  <span className="text-[10px] font-label font-semibold tracking-widest uppercase text-tertiary">
                    Artisanal Crochet • India
                  </span>
                </div>
                <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight leading-tight">
                  Made by hand.
                  <br />
                  <span className="text-primary italic font-serif font-normal">Made to keep.</span>
                </h1>
                <p className="text-xs font-body text-on-surface-variant leading-relaxed max-w-[280px]">
                  Thoughtfully crafted crochet pieces for heartfelt gifting, everyday moments and little lasting joys.
                </p>
                <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="w-full py-3 px-4 rounded-xl bg-primary text-on-primary text-xs font-label font-semibold tracking-wide shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Shop Collection</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('mobile-custom-studio');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-surface-container-lowest text-primary text-xs font-label font-semibold tracking-wide shadow-sm active:bg-surface-container transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">draw</span>
                    <span>Create Custom Gift</span>
                  </button>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] text-on-surface-variant font-label">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-primary">eco</span>
                    100% combed cotton yarn
                  </span>
                  <span className="flex items-center gap-0.5 opacity-70">
                    Scroll to explore
                    <span className="material-symbols-outlined text-[13px] animate-bounce">
                      expand_more
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Shop by Mood / Occasion */}
          <section className="px-4 py-6 flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                  Curated Moments
                </p>
                <h2 className="text-xl font-headline font-bold text-on-surface">
                  Find something worth keeping.
                </h2>
              </div>
              <span className="text-[11px] font-label text-primary font-medium">4 Moods</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {MOOD_CARDS.map((card) => (
                <div
                  key={card.id}
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="group relative rounded-xl overflow-hidden bg-surface-container-low shadow-sm flex flex-col active:scale-[0.99] transition-transform cursor-pointer"
                >
                  <div className="h-32 w-full overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={card.title}
                      src={card.mobileImage}
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-[9px] font-label font-bold tracking-wider uppercase text-on-surface">
                      {card.mobileBadge}
                    </span>
                  </div>
                  <div className="p-2.5 flex flex-col">
                    <h3 className="text-xs font-headline font-bold text-on-surface">
                      {card.title}
                    </h3>
                    <p className="text-[10px] text-on-surface-variant truncate">
                      {card.mobileSubtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Most Loved (Best Sellers) */}
          <section className="px-4 py-6 flex flex-col gap-4 bg-surface-container-low/50">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-xl font-headline font-bold text-on-surface">Most Loved</h2>
                <p className="text-xs font-body text-on-surface-variant">
                  Handmade favorites our customers keep coming back for.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigateToProduct(PRODUCTS[0])}
                className="text-xs font-label font-semibold text-primary flex items-center gap-0.5 hover:underline whitespace-nowrap cursor-pointer"
              >
                View all
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {PRODUCTS.slice(0, 4).map((product, idx) => {
                const isWishlisted = wishlistIds.includes(product.id);
                return (
                  <div
                    key={product.id}
                    className="bg-surface-container-lowest rounded-xl p-2.5 shadow-sm flex flex-col justify-between relative group"
                  >
                    <div
                      onClick={() => onNavigateToProduct(product)}
                      className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container cursor-pointer"
                    >
                      <img
                        className="w-full h-full object-cover"
                        alt={product.name}
                        src={product.mobileImage}
                        referrerPolicy="no-referrer"
                      />
                      {idx === 0 && (
                        <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label text-[9px] font-bold uppercase">
                          Bestseller
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product.id, product.name);
                        }}
                        className="w-7 h-7 rounded-full bg-surface/80 backdrop-blur-sm text-on-surface absolute top-2 right-2 flex items-center justify-center active:scale-90 transition-transform shadow-sm cursor-pointer"
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            isWishlisted ? 'material-fill text-primary' : ''
                          }`}
                        >
                          favorite
                        </span>
                      </button>
                    </div>
                    <div className="pt-2.5 flex flex-col gap-1">
                      <div className="flex items-center gap-1 text-[11px] text-tertiary font-label font-medium">
                        <span className="material-symbols-outlined text-[13px] material-fill">
                          star
                        </span>
                        <span>{product.rating.toFixed(1)}</span>
                        <span className="text-on-surface-variant text-[10px]">
                          ({product.mobileReviewsCount})
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => onNavigateToProduct(product)}
                        className="text-xs font-headline font-bold text-on-surface truncate text-left cursor-pointer"
                      >
                        {product.name}
                      </button>
                      <p className="text-[10px] text-on-surface-variant">
                        {product.mobileSubtitle}
                      </p>
                      <div className="flex items-center justify-between pt-1 mt-auto">
                        <span className="text-xs font-headline font-bold text-on-surface">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onAddToCart({
                              id: product.id,
                              name: product.name,
                              price: product.price,
                              image: product.mobileImage,
                            })
                          }
                          className="px-2.5 py-1 rounded-lg bg-secondary-container text-on-secondary-container text-[11px] font-label font-semibold active:scale-95 transition-transform flex items-center gap-0.5 cursor-pointer"
                        >
                          <span>Add</span>
                          <span className="material-symbols-outlined text-[14px]">add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Personalized Gifting Section */}
          <section id="mobile-custom-studio" className="px-4 py-8 flex flex-col gap-4">
            <div className="rounded-2xl bg-secondary-container/40 p-5 shadow-sm flex flex-col gap-4 relative overflow-hidden">
              <svg
                className="absolute -right-8 -top-8 w-36 h-36 text-primary/10 pointer-events-none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="40" strokeDasharray="4 4"></circle>
              </svg>
              <div className="flex flex-col gap-1 z-10">
                <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                  Custom Studio
                </span>
                <h2 className="text-2xl font-headline font-bold text-on-surface">
                  Made just for you.
                </h2>
                <p className="text-xs font-body text-on-surface-variant leading-relaxed">
                  Choose the colors, custom details and handwritten touches that make your gift truly one of a kind.
                </p>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3.5 z-10">
                <div className="relative h-44 rounded-lg overflow-hidden bg-surface-container-low">
                  <img
                    className="w-full h-full object-cover transition-all duration-300"
                    alt="Artisanal gift box unboxing with handmade crochet roses"
                    src={BRAND_ASSETS.mobileCustomStudio}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-surface/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg flex items-center justify-between text-[11px]">
                    <span className="font-medium text-on-surface">
                      Selected: <strong className="text-primary">{selectedShade}</strong>
                    </span>
                    <span className="text-tertiary font-bold">₹1,199</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] font-label font-semibold text-on-surface-variant">
                    Step 1: Pick Palette
                  </span>
                  <div className="flex items-center gap-2.5">
                    {MOBILE_SWATCHES.map((sw) => {
                      const active = selectedShade === sw.name;
                      return (
                        <button
                          key={sw.name}
                          type="button"
                          onClick={() => setSelectedShade(sw.name)}
                          className={`w-7 h-7 rounded-full ${sw.bg} shadow-sm flex items-center justify-center transition-transform cursor-pointer ${
                            active ? 'scale-110 ring-2 ring-primary ring-offset-1' : ''
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-[14px] ${
                              sw.textLight ? 'text-white' : 'text-surface'
                            } ${active ? 'opacity-100' : 'opacity-0'}`}
                          >
                            check
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 pt-1 text-center font-label text-[10px]">
                  <button
                    type="button"
                    onClick={() => setConfigStep(1)}
                    className={`py-1.5 px-1 rounded cursor-pointer ${
                      configStep === 1
                        ? 'bg-surface-container font-semibold text-primary'
                        : 'bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    1. Colors
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfigStep(2)}
                    className={`py-1.5 px-1 rounded cursor-pointer ${
                      configStep === 2
                        ? 'bg-surface-container font-semibold text-primary'
                        : 'bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    2. Note
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfigStep(3)}
                    className={`py-1.5 px-1 rounded cursor-pointer ${
                      configStep === 3
                        ? 'bg-surface-container font-semibold text-primary'
                        : 'bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    3. Wrap
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onAddToCart({
                      id: `custom-gift-${selectedShade}`,
                      name: `Custom Gift (${selectedShade})`,
                      price: 1199,
                      image: BRAND_ASSETS.mobileCustomStudio,
                    })
                  }
                  className="w-full py-3 rounded-lg bg-primary text-on-primary text-xs font-label font-bold tracking-wide shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Create Your Custom Gift</span>
                  <span className="material-symbols-outlined text-[15px]">brush</span>
                </button>
              </div>
            </div>
          </section>

          {/* 5. Product Collections (Editorial Bento Layout) */}
          <section className="px-4 py-6 flex flex-col gap-4">
            <div>
              <p className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                Discover By Category
              </p>
              <h2 className="text-xl font-headline font-bold text-on-surface">
                The Handcrafted Range
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div
                onClick={() => onNavigateToProduct(PRODUCTS[0])}
                className="relative h-56 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end p-4 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${HANDCRAFTED_RANGE.bouquets.mobile}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
                <div className="relative z-10 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-label uppercase tracking-wider text-primary font-bold">
                      Forever Blooms
                    </span>
                    <h3 className="text-lg font-headline font-bold text-on-surface">
                      Crochet Flower Bouquets
                    </h3>
                    <p className="text-xs text-on-surface-variant">
                      They never wilt. Made with love.
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="relative h-44 rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-3 cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HANDCRAFTED_RANGE.amigurumi.mobile}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xs font-headline font-bold text-on-surface">
                      Amigurumi Friends
                    </h3>
                    <p className="text-[10px] text-on-surface-variant">Cute Keepsakes</p>
                  </div>
                </div>
                <div
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="relative h-44 rounded-xl overflow-hidden shadow-sm flex flex-col justify-end p-3 cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HANDCRAFTED_RANGE.homeAccents.mobile}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xs font-headline font-bold text-on-surface">
                      Home &amp; Table
                    </h3>
                    <p className="text-[10px] text-on-surface-variant">Cozy Accents</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Why Handmade */}
          <section className="px-4 py-8 flex flex-col gap-4 bg-surface-container-low/60">
            <div className="text-center flex flex-col items-center gap-1">
              <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                The Buni Philosophy
              </span>
              <h2 className="text-xl font-headline font-bold text-on-surface">
                Small stitches. Big meaning.
              </h2>
              <p className="text-xs font-body text-on-surface-variant max-w-xs">
                Honoring patience and artisanal craft over fast factory production.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">pan_tool</span>
                </div>
                <h3 className="text-xs font-headline font-bold text-on-surface">
                  100% Handcrafted
                </h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Every loop, knot, and seam is carefully crocheted with artisan hands.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                </div>
                <h3 className="text-xs font-headline font-bold text-on-surface">
                  Wonderfully Unique
                </h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Subtle organic variations ensure no two pieces are ever identical.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[18px]">
                    featured_seasonal_and_gifts
                  </span>
                </div>
                <h3 className="text-xs font-headline font-bold text-on-surface">Gift Ready</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Arrives packaged in luxury boxes with ribbons and personalized wax seals.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-3.5 rounded-xl shadow-sm flex flex-col gap-2">
                <div className="w-8 h-8 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined text-[18px]">loyalty</span>
                </div>
                <h3 className="text-xs font-headline font-bold text-on-surface">Made in India</h3>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Supporting local women crafters and traditional textile preservation.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Brand Story */}
          <section className="px-4 py-8 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="h-52 w-full relative">
                <img
                  className="w-full h-full object-cover"
                  alt="Artisan female hands holding wooden ergonomic crochet hook"
                  src={BRAND_ASSETS.mobileStory}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>
              <div className="p-5 flex flex-col gap-3 -mt-6 relative z-10">
                <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                  Our Journey
                </span>
                <h2 className="text-xl font-headline font-bold text-on-surface">
                  Every stitch has a story.
                </h2>
                <p className="text-xs font-body text-on-surface-variant leading-relaxed">
                  Buni Crochet started with a simple belief — in a world dominated by mass production and fleeting plastic, handcrafted gifts carry lasting warmth. We weave patience, calm intention, and gentle textures into every treasure.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="inline-flex items-center gap-1.5 text-xs font-label font-bold text-primary hover:underline pt-1 w-fit cursor-pointer"
                >
                  <span>Read our full artisan story</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>

          {/* 8. Seen & Loved */}
          <section className="px-4 py-6 flex flex-col gap-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                  @bunicrochet
                </p>
                <h2 className="text-xl font-headline font-bold text-on-surface">
                  Seen &amp; Loved
                </h2>
                <p className="text-xs text-on-surface-variant">
                  Real moments from our warm community.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onShowToast('Following @bunicrochet')}
                className="px-2.5 py-1 rounded-full bg-surface-container text-[11px] font-label font-medium text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
              >
                Follow +
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {COMMUNITY_GALLERY.mobile.map((url, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="aspect-square rounded-lg overflow-hidden bg-surface-container-low shadow-sm cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover"
                    alt={`Community moment ${idx + 1}`}
                    src={url}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 9. Customer Reviews */}
          <section className="px-4 py-6 flex flex-col gap-4 bg-surface-container-low/40">
            <div className="text-center flex flex-col items-center">
              <span className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                Kind Words
              </span>
              <h2 className="text-xl font-headline font-bold text-on-surface">
                Loved by our customers
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-tertiary">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[15px] material-fill"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-primary font-label font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">verified</span> Verified
                    Buyer
                  </span>
                </div>
                <p className="text-xs font-body text-on-surface leading-relaxed">
                  “Ordered the Daisy Bouquet for my sister's graduation. The yarn quality is exquisite and the custom gift note was written so tenderly. She cried happy tears!”
                </p>
                <div className="text-[11px] font-label font-bold text-on-surface-variant pt-1">
                  Ananya S. —{' '}
                  <span className="font-normal text-on-surface-variant/70">Mumbai</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex text-tertiary">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[15px] material-fill"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] text-primary font-label font-bold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[12px]">verified</span> Verified
                    Buyer
                  </span>
                </div>
                <p className="text-xs font-body text-on-surface leading-relaxed">
                  “The mini tulips are now on my work desk! Unlike fresh flowers, these brighten my morning every single day without drying up. Superb craftsmanship.”
                </p>
                <div className="text-[11px] font-label font-bold text-on-surface-variant pt-1">
                  Priya M. —{' '}
                  <span className="font-normal text-on-surface-variant/70">Bengaluru</span>
                </div>
              </div>
            </div>
          </section>

          {/* 10. Newsletter Section */}
          <section className="px-4 py-8 flex flex-col gap-3">
            <div className="bg-primary text-on-primary rounded-2xl p-5 shadow-md flex flex-col gap-3 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
              <div className="flex flex-col gap-1 z-10">
                <span className="text-[10px] font-label uppercase tracking-widest text-on-primary-container font-semibold">
                  Join The Inner Circle
                </span>
                <h2 className="text-xl font-headline font-bold text-on-primary">
                  A little handmade joy, in your inbox.
                </h2>
                <p className="text-xs font-body text-on-primary/80 leading-relaxed">
                  Get first access to limited drops, seasonal gift sets, and secret subscriber previews.
                </p>
              </div>
              <form
                className="flex flex-col gap-2 z-10 pt-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  setNlSubscribed(true);
                  onShowToast('Subscribed to Buni Inner Circle! ✨');
                }}
              >
                <div className="flex gap-2">
                  <input
                    value={nlEmail}
                    onChange={(e) => setNlEmail(e.target.value)}
                    className="flex-1 px-3 py-2.5 rounded-lg bg-surface text-on-surface text-xs placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-tertiary shadow-sm"
                    placeholder="Your email address"
                    required
                    type="email"
                  />
                  <button
                    className="px-4 py-2.5 rounded-lg bg-tertiary-container text-on-tertiary-container text-xs font-label font-bold shadow active:scale-95 transition-transform whitespace-nowrap cursor-pointer"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
                {nlSubscribed && (
                  <p className="text-[11px] text-tertiary-fixed font-medium mt-1">
                    ✨ You are subscribed! Welcome to our craft family.
                  </p>
                )}
                <span className="text-[10px] text-on-primary/60 font-label">
                  No spam. Only beautiful handcrafted stories &amp; warmth.
                </span>
              </form>
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 bg-surface-container-low px-6 py-10 rounded-t-xl">
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-sm font-headline font-bold uppercase tracking-widest text-primary">
                Buni Crochet
              </h3>
              <p className="text-xs font-body leading-relaxed text-on-surface-variant">
                Intricately handcrafted artisanal crochet treasures, spun in India with organic yarns and heirloom dedication.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-label font-bold uppercase tracking-wider text-on-surface">
                  Collections
                </h4>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[3])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Tote Bags &amp; Pouches
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[0])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Apparel &amp; Cardigans
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[1])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Amigurumi &amp; Toys
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[2])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Home Accents
                    </button>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-label font-bold uppercase tracking-wider text-on-surface">
                  Customer Care
                </h4>
                <ul className="space-y-2 text-on-surface-variant">
                  <li>
                    <button
                      type="button"
                      onClick={() => onShowToast('Track your order via SMS link')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Track Your Order
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[0])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Shipping Policy
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onNavigateToProduct(PRODUCTS[0])}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Care Guide
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onShowToast('Contact studio: hello@bunicrochet.in')}
                      className="hover:text-primary transition-colors cursor-pointer"
                    >
                      Contact Studio
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <h4 className="text-[11px] font-label font-bold uppercase tracking-wider text-on-surface-variant">
                100% Secure Payments
              </h4>
              <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
                <span className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] uppercase font-bold text-primary shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                  UPI
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] uppercase font-bold text-primary shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                  Razorpay
                </span>
                <span className="px-2 py-1 bg-surface-container-lowest rounded text-[10px] uppercase font-bold text-primary shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                  Cards / NetBanking
                </span>
              </div>
            </div>
            <div className="pt-4 text-[11px] text-on-surface-variant/80 flex flex-col gap-1">
              <p>© 2025 Buni Crochet. bunicrochet.in • Crafted with Love.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* BOTTOM NAVIGATION BAR */}
      <nav className="sticky bottom-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]">
        <div className="flex justify-around items-center h-16 px-2">
          <button
            type="button"
            onClick={() => {
              setActiveBottomTab('shop');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors cursor-pointer ${
              activeBottomTab === 'shop'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">storefront</span>
            <span className="text-[11px] font-label">Shop</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBottomTab('categories');
              onNavigateToProduct(PRODUCTS[0]);
            }}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors cursor-pointer ${
              activeBottomTab === 'categories'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">grid_view</span>
            <span className="text-[11px] font-label">Categories</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBottomTab('wishlist');
              onOpenWishlist();
            }}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors cursor-pointer ${
              activeBottomTab === 'wishlist'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            <span className="text-[11px] font-label">Wishlist</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBottomTab('cart');
              onOpenCart();
            }}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors cursor-pointer ${
              activeBottomTab === 'cart'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
            <span className="text-[11px] font-label">Cart</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveBottomTab('account');
              onShowToast('Signed in as Ananya • Buni Member');
            }}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] min-h-[44px] transition-colors cursor-pointer ${
              activeBottomTab === 'account'
                ? 'text-primary font-semibold'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-[11px] font-label">Account</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
