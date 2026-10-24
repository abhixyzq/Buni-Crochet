import React, { useState } from 'react';
import {
  BRAND_ASSETS,
  COMMUNITY_GALLERY,
  HANDCRAFTED_RANGE,
  MOOD_CARDS,
  PRODUCTS,
  ProductItem,
} from '../data/products';

interface DesktopHomeProps {
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
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onShowToast: (msg: string) => void;
}

const STUDIO_PALETTES = [
  { name: 'Terracotta Blend', color: '#c86d51' },
  { name: 'Sage Meadow', color: '#7a8f7b' },
  { name: 'Honey Ivory', color: '#e8c679' },
  { name: 'Dusty Rose', color: '#cb8d9e' },
  { name: 'Lavender Mist', color: '#9f8eb9' },
];

export const DesktopHome: React.FC<DesktopHomeProps> = ({
  onNavigateToProduct,
  onAddToCart,
  wishlistIds,
  onToggleWishlist,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onShowToast,
}) => {
  const [selectedPalette, setSelectedPalette] = useState('Terracotta Blend');
  const [customNote, setCustomNote] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [footerSubscribed, setFooterSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [footerEmail, setFooterEmail] = useState('');
  const [activeMoodFilter, setActiveMoodFilter] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-tertiary text-on-tertiary py-2 px-6 text-center text-xs tracking-widest uppercase font-medium">
          <p>Free shipping on orders above ₹999 • Handmade with love in India</p>
        </div>
        <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col text-left group cursor-pointer"
            >
              <span className="text-2xl font-headline tracking-[0.25em] font-bold text-on-surface uppercase">
                BUNI CROCHET
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
                Artisanal Indian Keepsakes
              </span>
            </button>
            <nav className="hidden xl:flex items-center gap-8 pl-6">
              <button
                type="button"
                onClick={() => onNavigateToProduct(PRODUCTS[0])}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Shop
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('handcrafted-range')}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Collections
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('curated-intentions')}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Gifts
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('custom-studio')}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Custom Orders
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('artisan-story')}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Our Story
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button
              aria-label="Search catalog"
              onClick={onOpenSearch}
              className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <button
              type="button"
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">favorite</span>
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-secondary text-on-secondary text-[10px] font-bold flex items-center justify-center">
                {wishlistCount}
              </span>
            </button>
            <button
              type="button"
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className="relative w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[22px]">shopping_bag</span>
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => onShowToast('Signed in as Ananya • Buni Inner Circle Member')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-28 bg-surface flex-1">
        <div className="flex flex-col w-full">
          {/* SECTION 1: EDITORIAL HERO */}
          <section className="relative w-full px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col items-start z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-semibold tracking-[0.2em] uppercase mb-6 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Artisanal Crochet • India
                </div>
                <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-on-surface leading-[1.08] mb-6">
                  Made by hand.
                  <br />
                  <span className="italic font-normal font-serif text-primary">Made to keep.</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 font-normal">
                  Thoughtfully crafted crochet pieces for heartfelt gifting, everyday moments, and little lasting joys. Lovingly spun stitch by stitch using 100% natural Indian cotton yarn.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-14">
                  <button
                    type="button"
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-xl font-medium text-sm tracking-wider uppercase hover:bg-primary-container hover:text-on-primary-container shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <span>Shop Collection</span>
                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection('custom-studio')}
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-surface-container text-on-surface rounded-xl font-medium text-sm tracking-wider uppercase hover:bg-surface-container-high transition-all duration-300 cursor-pointer"
                  >
                    <span>Create Custom Gift</span>
                    <span className="text-tertiary font-bold">✦</span>
                  </button>
                </div>
                <div className="w-full grid grid-cols-3 gap-4 pt-6 bg-surface-container-low p-6 rounded-2xl">
                  <div className="flex flex-col gap-1">
                    <span className="material-symbols-outlined text-tertiary text-2xl">compost</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      100% Combed
                    </span>
                    <span className="text-[11px] text-on-surface-variant">Organic soft cotton</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      local_shipping
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Pan-India Free
                    </span>
                    <span className="text-[11px] text-on-surface-variant">On orders over ₹999</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="material-symbols-outlined text-secondary text-2xl">
                      sentiment_satisfied
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                      Heirloom Quality
                    </span>
                    <span className="text-[11px] text-on-surface-variant">Stitched to endure</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-surface-container-high cursor-pointer group"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Close up editorial shot of bespoke handcrafted crochet daisy and tulip flowers arranged in an artisanal terracotta vase"
                    src={BRAND_ASSETS.desktopHero}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-surface-container-lowest/90 backdrop-blur-md p-5 rounded-2xl flex items-center justify-between shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold text-lg">
                        ✿
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                          Featured Creation
                        </p>
                        <p className="text-sm font-semibold text-on-surface">
                          Everlasting Springtime Bouquet
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">
                      ₹1,499
                    </span>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-secondary-fixed opacity-70 blur-2xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-tertiary-fixed opacity-60 blur-3xl -z-10"></div>
              </div>
            </div>
          </section>

          {/* SECTION 2: SHOP BY MOOD */}
          <section id="curated-intentions" className="w-full px-6 lg:px-12 py-16 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-tertiary block mb-2">
                    Curated Intentions
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                    Find something worth keeping.
                  </h2>
                </div>
                <p className="text-sm text-on-surface-variant mt-2 md:mt-0 font-normal">
                  4 curated moods for every thoughtful gesture
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOOD_CARDS.map((card) => (
                  <button
                    key={card.id}
                    type="button"
                    onClick={() => {
                      setActiveMoodFilter(card.title);
                      onNavigateToProduct(PRODUCTS[0]);
                    }}
                    className={`group relative rounded-2xl overflow-hidden bg-surface-container flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 text-left cursor-pointer ${
                      activeMoodFilter === card.title ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <div className="relative w-full aspect-[3/4] overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={card.title}
                        src={card.desktopImage}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent"></div>
                      <div className="absolute bottom-5 left-5 right-5 text-on-primary">
                        <span className="text-[10px] tracking-widest uppercase font-semibold text-tertiary-fixed block mb-1">
                          {card.kicker}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight">{card.title}</h3>
                        <p className="text-xs text-surface-container-low opacity-90 mt-1">
                          {card.desktopSubtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: BEST SELLERS (MOST LOVED) */}
          <section id="most-loved" className="w-full px-6 lg:px-12 py-20 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-2">
                    Artisan Favorites
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                    Most Loved
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-container transition-colors mt-3 sm:mt-0 group cursor-pointer"
                >
                  <span>View all 48 handmade creations</span>
                  <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRODUCTS.slice(0, 4).map((product) => {
                  const isWishlisted = wishlistIds.includes(product.id);
                  return (
                    <div
                      key={product.id}
                      className="bg-surface-container-lowest rounded-2xl overflow-hidden p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                    >
                      <div
                        onClick={() => onNavigateToProduct(product)}
                        className="relative aspect-square w-full rounded-xl overflow-hidden bg-surface-container cursor-pointer"
                      >
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={product.name}
                          src={product.desktopImage}
                          referrerPolicy="no-referrer"
                        />
                        {product.badge && product.badgeType !== 'surface' && (
                          <span
                            className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm ${
                              product.badgeType === 'tertiary'
                                ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                                : 'bg-secondary-container text-on-secondary-container'
                            }`}
                          >
                            {product.badge}
                          </span>
                        )}
                        <button
                          aria-label="Add to wishlist"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product.id, product.name);
                          }}
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer ${
                            isWishlisted ? 'text-error' : 'text-secondary hover:text-error'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-lg ${
                              isWishlisted ? 'material-fill' : ''
                            }`}
                          >
                            favorite
                          </span>
                        </button>
                      </div>
                      <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                        <div className="flex items-center gap-1 text-tertiary mb-1">
                          <span className="material-symbols-outlined text-sm material-fill">
                            star
                          </span>
                          <span className="text-xs font-bold">{product.rating.toFixed(1)}</span>
                          <span className="text-[11px] text-on-surface-variant ml-1">
                            ({product.reviewsCount} reviews)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onNavigateToProduct(product)}
                          className="font-headline font-bold text-base text-on-surface group-hover:text-primary transition-colors text-left cursor-pointer"
                        >
                          {product.name}
                        </button>
                        <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-1">
                          {product.subtitle}
                        </p>
                        <div className="mt-4 pt-3 flex items-center justify-between">
                          <span className="text-base font-bold text-on-surface">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              onAddToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.desktopImage,
                              })
                            }
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-primary text-on-primary text-xs font-semibold rounded-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">shopping_bag</span>
                            <span>Add to Bag</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* SECTION 4: INTERACTIVE CUSTOM GIFT STUDIO */}
          <section className="w-full px-6 lg:px-12 py-20 bg-surface-container-low" id="custom-studio">
            <div className="max-w-7xl mx-auto">
              <div className="bg-surface-container-lowest rounded-3xl p-8 lg:p-14 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-inner relative">
                      <img
                        className="w-full h-full object-cover"
                        alt="Luxury unboxing experience: open handcrafted kraft gift box holding a pastel crochet bouquet"
                        src={BRAND_ASSETS.desktopCustomStudio}
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface-container-lowest/95 backdrop-blur-md shadow-md text-xs">
                        <p className="font-bold text-on-surface tracking-wider uppercase mb-1">
                          Live Studio Preview • {selectedPalette}
                        </p>
                        <p className="text-on-surface-variant">
                          {customNote
                            ? `“${customNote}” — Penned on cotton card with wax seal.`
                            : 'Your bespoke gift arrangement box with custom wax seal & handwritten note card.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7 flex flex-col">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                      Custom Gifting Studio
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-headline font-bold text-on-surface tracking-tight leading-tight mb-4">
                      Made just for you.
                    </h2>
                    <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
                      Choose the colors, custom details, and handwritten touches that make your gift truly one of a kind. Every piece is handcrafted by our master artisans to your exact vision.
                    </p>
                    <div className="space-y-6 mb-10">
                      {/* Step 1 */}
                      <div className="p-4 rounded-xl bg-surface-container">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                            Step 1: Choose Yarn Palette
                          </span>
                          <span className="text-xs text-primary font-semibold">
                            {selectedPalette}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          {STUDIO_PALETTES.map((p) => (
                            <button
                              key={p.name}
                              aria-label={p.name}
                              type="button"
                              onClick={() => setSelectedPalette(p.name)}
                              style={{ backgroundColor: p.color }}
                              className={`w-8 h-8 rounded-full transition-all hover:scale-110 shadow-sm cursor-pointer ${
                                selectedPalette === p.name
                                  ? 'ring-2 ring-primary ring-offset-2 scale-110'
                                  : ''
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="p-4 rounded-xl bg-surface-container">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                            Step 2: Add Hand-Penned Calligraphy Note
                          </span>
                          <span className="text-xs text-on-surface-variant font-medium">
                            Included Complimentary
                          </span>
                        </div>
                        <input
                          value={customNote}
                          onChange={(e) => setCustomNote(e.target.value)}
                          maxLength={80}
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary shadow-inner"
                          placeholder="Write your heartfelt message here (up to 80 chars)..."
                          type="text"
                        />
                      </div>

                      {/* Step 3 */}
                      <div className="p-4 rounded-xl bg-surface-container flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-tertiary text-2xl">
                            verified
                          </span>
                          <div>
                            <p className="text-xs font-bold text-on-surface uppercase tracking-wider">
                              Step 3: Artisan Gift Wrapping
                            </p>
                            <p className="text-[11px] text-on-surface-variant">
                              Signature debossed rigid box, pure cotton twill ribbon, botanical wax seal
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-tertiary uppercase tracking-wider">
                          Included
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart({
                            id: `custom-gift-${selectedPalette.toLowerCase().replace(/\s+/g, '-')}`,
                            name: `Custom Gift Box (${selectedPalette})`,
                            price: 1199,
                            image: BRAND_ASSETS.desktopCustomStudio,
                            variant: customNote ? `Note: "${customNote}"` : 'Includes Wax Seal & Gift Box',
                          });
                        }}
                        className="w-full sm:w-auto text-center px-8 py-4 bg-primary text-on-primary font-medium text-sm tracking-wider uppercase rounded-xl hover:bg-primary-container hover:text-on-primary-container transition-all shadow-md cursor-pointer"
                      >
                        Launch Gift Builder Studio ✦
                      </button>
                      <span className="text-xs text-on-surface-variant">
                        Takes under 2 minutes • 100% customisable
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: THE HANDCRAFTED RANGE (MAGAZINE CATEGORIES) */}
          <section id="handcrafted-range" className="w-full px-6 lg:px-12 py-20 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary block mb-2">
                  Signature Categories
                </span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold text-on-surface">
                  The Handcrafted Range
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Big Highlight Card */}
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="lg:col-span-7 group relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto shadow-md text-left cursor-pointer"
                >
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Grand display of various hand-crocheted everlasting botanicals"
                    src={HANDCRAFTED_RANGE.bouquets.desktop}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/85 via-on-surface/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-on-primary flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed mb-2">
                      Everlasting Botanicals
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-headline font-bold mb-2">
                      Crochet Flower Bouquets
                    </h3>
                    <p className="text-xs sm:text-sm text-surface-container-low max-w-md font-normal leading-relaxed mb-4">
                      They never wilt, droop, or fade. Made with everlasting warmth for graduations, anniversaries, and personal sanctuary spaces.
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-on-primary underline underline-offset-4">
                      Explore 22 Floral Stems →
                    </span>
                  </div>
                </button>

                {/* Right Side 2 Column Stacks */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <button
                    type="button"
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="group relative rounded-3xl overflow-hidden aspect-[16/9] shadow-md flex-1 text-left cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Cute miniature amigurumi duckling and tiny sleep bunny"
                      src={HANDCRAFTED_RANGE.amigurumi.desktop}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-on-primary">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed mb-1 block">
                        Heirloom Toys
                      </span>
                      <h4 className="text-xl font-headline font-bold mb-1">Amigurumi Friends</h4>
                      <p className="text-xs text-surface-container-low">
                        Safe, plastic-free organic keepsakes
                      </p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="group relative rounded-3xl overflow-hidden aspect-[16/9] shadow-md flex-1 text-left cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      alt="Set of delicate hand-crocheted daisy coasters and textured cotton mug rugs"
                      src={HANDCRAFTED_RANGE.homeAccents.desktop}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-on-primary">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed mb-1 block">
                        Living Spaces
                      </span>
                      <h4 className="text-xl font-headline font-bold mb-1">
                        Home Accents &amp; Coasters
                      </h4>
                      <p className="text-xs text-surface-container-low">
                        Elevate your daily morning coffee ritual
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 6: THE BUNI PHILOSOPHY */}
          <section className="w-full px-6 lg:px-12 py-16 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-16">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-2">
                  Our Foundation
                </span>
                <h2 className="text-3xl font-headline font-bold text-on-surface">
                  Small stitches. Big meaning.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-low">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">pan_tool</span>
                  </div>
                  <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                    100% Handcrafted
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Every loop, knot, and seam is carefully crocheted by skilled Indian women crafters, avoiding automated assembly.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-low">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">fingerprint</span>
                  </div>
                  <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                    Wonderfully Unique
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Subtle organic stitch variations ensure no two pieces are identical. Each treasure carries its maker’s soul.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-low">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">
                      featured_seasonal_and_gifts
                    </span>
                  </div>
                  <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                    Gift Ready
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Arrives unboxing-ready in debossed keepsake boxes with botanical tissue wrap, cotton twine, and sealed tags.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-surface-container-low">
                  <div className="w-14 h-14 rounded-2xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container mb-5 shadow-sm">
                    <span className="material-symbols-outlined text-2xl">favorite</span>
                  </div>
                  <h3 className="text-base font-headline font-bold text-on-surface mb-2">
                    Made in India
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Empowering homegrown female artisans through fair, dignifying wages and preserving heritage yarn crafts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 7: ARTISAN STORY */}
          <section id="artisan-story" className="w-full px-6 lg:px-12 py-20 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl bg-surface-container">
                    <img
                      className="w-full h-full object-cover"
                      alt="Artisan woman in an Indian home workshop holding an ergonomic wooden crochet hook"
                      src={BRAND_ASSETS.desktopStory}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 rounded-2xl bg-surface-container-highest shadow-lg max-w-xs">
                    <p className="text-xs italic text-on-surface font-serif leading-relaxed">
                      “When someone opens a Buni box, they don’t just receive an object. They receive hours of mindful patience.”
                    </p>
                    <p className="text-[11px] font-bold text-primary uppercase tracking-widest mt-2">
                      — Radha, Lead Artisan
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-6 lg:pl-6 flex flex-col">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-tertiary block mb-3">
                    Behind The Hook
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-headline font-bold text-on-surface mb-6 leading-tight">
                    Every stitch has a story.
                  </h2>
                  <div className="space-y-4 text-sm text-on-surface-variant leading-relaxed mb-8 font-normal">
                    <p>
                      In a world flooded with automated factory plastics and fast disposables, Buni was born out of a yearning for slow, deliberate craft. We believe gifts should be cherished, not discarded after a single week.
                    </p>
                    <p>
                      Our flowers never wilt. They remain on study desks, bedside tables, and rearview mirrors for years as enduring symbols of affection, nostalgia, and companionship.
                    </p>
                    <p>
                      Every stem and keepsake supports our guild of local women artisans across Rajasthan and Karnataka, providing flexible, home-based livelihoods that honor their timeless skill.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary uppercase tracking-wider hover:text-primary-container transition-colors group w-fit cursor-pointer"
                  >
                    <span>Read our full artisan story</span>
                    <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 8: SEEN & LOVED COMMUNITY GALLERY */}
          <section className="w-full px-6 lg:px-12 py-16 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-secondary block mb-2">
                    Our Community
                  </span>
                  <h2 className="text-3xl font-headline font-bold text-on-surface">
                    Seen &amp; Loved
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => onShowToast('Following @bunicrochet community feed')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container text-xs font-semibold uppercase tracking-wider text-on-surface hover:bg-surface-container-high transition-colors mt-3 md:mt-0 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">photo_camera</span>
                  <span>Follow @bunicrochet on Instagram (42k lovers)</span>
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {COMMUNITY_GALLERY.desktop.map((imgUrl, idx) => (
                  <div
                    key={idx}
                    onClick={() => onNavigateToProduct(PRODUCTS[0])}
                    className="aspect-square rounded-xl overflow-hidden bg-surface-container shadow-sm group relative cursor-pointer"
                  >
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      alt={`Community moment ${idx + 1}`}
                      src={imgUrl}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 9: REVIEWS & TESTIMONIALS */}
          <section className="w-full px-6 lg:px-12 py-20 bg-surface">
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-xl mx-auto mb-14">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary block mb-2">
                  Real Stories
                </span>
                <h2 className="text-3xl font-headline font-bold text-on-surface">
                  Loved across 10,000+ homes
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-tertiary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base material-fill">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed mb-6">
                      “I ordered the crochet daisies for my best friend’s birthday. Real flowers dry up in 3 days, but she still has these on her work desk 6 months later! The wax seal packaging is breathtaking.”
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
                    <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                      AK
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Ananya Kapoor</p>
                      <div className="flex items-center gap-1 text-[11px] text-tertiary">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span>Verified Buyer • Bengaluru</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-tertiary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base material-fill">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed mb-6">
                      “The custom studio made our anniversary so simple yet deeply personal. The handwritten card was penned so elegantly, and the tulip colors matched our wedding palette flawlessly.”
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
                    <div className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-xs">
                      RM
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Rohan Mehta</p>
                      <div className="flex items-center gap-1 text-[11px] text-tertiary">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span>Verified Buyer • Mumbai</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-tertiary mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-base material-fill">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-on-surface-variant italic leading-relaxed mb-6">
                      “The feel of the cotton yarn is so soft yet completely sturdy. You can see the human hands in every tiny loop. It feels like an heirloom piece passed down from a loving grandmother.”
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-surface-container">
                    <div className="w-9 h-9 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs">
                      TI
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface">Tanvi Iyer</p>
                      <div className="flex items-center gap-1 text-[11px] text-tertiary">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span>Verified Buyer • New Delhi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 10: NEWSLETTER BANNER */}
          <section className="w-full px-6 lg:px-12 py-16 bg-surface-container-low">
            <div className="max-w-5xl mx-auto rounded-3xl bg-secondary text-on-secondary p-8 lg:p-14 text-center shadow-lg relative overflow-hidden">
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-tertiary-fixed block mb-3">
                  Slow Living Reflections
                </span>
                <h2 className="text-3xl lg:text-4xl font-headline font-bold mb-4 tracking-tight">
                  A little handmade joy, in your inbox.
                </h2>
                <p className="text-sm text-surface-container-low opacity-90 mb-8 max-w-lg mx-auto">
                  Be the first to know about seasonal yarn drops, artisan journals, and exclusive collector editions.
                </p>
                <form
                  className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setNewsletterSubscribed(true);
                    onShowToast('Welcome to the Buni Inner Circle! ✨');
                  }}
                >
                  <input
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest text-on-surface placeholder-on-surface-variant text-sm focus:outline-none shadow-sm"
                    placeholder="Enter your email address"
                    required
                    type="email"
                  />
                  <button
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-tertiary text-on-tertiary font-semibold text-xs tracking-wider uppercase hover:bg-tertiary-container hover:text-on-tertiary-container transition-all whitespace-nowrap shadow-sm cursor-pointer"
                    type="submit"
                  >
                    {newsletterSubscribed ? 'Subscribed! ✨' : 'Subscribe'}
                  </button>
                </form>
                <p className="text-[11px] text-surface-container-high opacity-70 mt-3">
                  No spam, ever. Unsubscribe with one click anytime.
                </p>
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-primary opacity-30 blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-tertiary opacity-30 blur-2xl pointer-events-none"></div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14">
          <div className="lg:col-span-3 flex flex-col justify-between pr-4">
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-xl font-headline tracking-[0.2em] font-bold text-on-surface uppercase">
                  BUNI CROCHET
                </p>
                <p className="text-xs tracking-widest text-secondary uppercase">bunicrochet.in</p>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Intricately handcrafted artisanal crochet treasures, spun in India with organic yarns and heirloom dedication.
              </p>
            </div>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-xs text-tertiary font-semibold tracking-wider uppercase">
                <span className="material-symbols-outlined text-base">eco</span>
                <span>100% Heirloom Organic Cotton</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] text-on-surface uppercase">Shop</h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Flower Bouquets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[1])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Amigurumi &amp; Keepsakes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[3])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Bags &amp; Accessories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[2])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Home Décor
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] text-on-surface uppercase">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => onShowToast('Order tracking available via SMS & WhatsApp')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Shipping &amp; Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Returns &amp; Exchanges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Care Guide
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowToast('Studio support: hello@bunicrochet.in')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onShowToast('Connected to Buni Kolhapur & Bengaluru Studio')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] text-on-surface uppercase">
              About &amp; Story
            </h4>
            <ul className="space-y-2.5 text-sm text-on-surface-variant">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('artisan-story')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('artisan-story')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Meet the Artisans
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('custom-studio')}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Custom Gifting Studio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigateToProduct(PRODUCTS[0])}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Buni Journal
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold tracking-[0.18em] text-on-surface uppercase">
              Join The Inner Circle
            </h4>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Receive intimate previews of limited drops, artisan journals, and special celebrations.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFooterSubscribed(true);
                onShowToast('Joined the Buni Inner Circle! ✨');
              }}
              className="flex flex-col gap-2 pt-1"
            >
              <div className="flex rounded-lg overflow-hidden bg-surface-container">
                <input
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs bg-transparent text-on-surface placeholder-on-surface-variant focus:outline-none"
                  placeholder="Your email address"
                  required
                  type="email"
                />
                <button
                  className="px-4 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer"
                  type="submit"
                >
                  {footerSubscribed ? 'Joined' : 'Join'}
                </button>
              </div>
              <p className="text-[11px] text-on-surface-variant">
                Handcrafted weekly reflections. No spam.
              </p>
            </form>
            <div className="pt-3">
              <span className="text-[11px] tracking-wider uppercase font-semibold text-on-surface block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onShowToast('Opening @bunicrochet Instagram')}
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[17px]">photo_camera</span>
                </button>
                <button
                  type="button"
                  onClick={() => onShowToast('Opening Buni Crochet Pinterest Lookbook')}
                  aria-label="Pinterest"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[17px]">push_pin</span>
                </button>
                <button
                  type="button"
                  onClick={() => onShowToast('Opening Buni Artisan Stories on YouTube')}
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[17px]">play_circle</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container py-6 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-tertiary">verified_user</span>
              <span>100% Secure Payments • UPI, Razorpay, Cards, Netbanking</span>
            </div>
            <p>© 2026 Buni Crochet. bunicrochet.in. Crafted with love in India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
