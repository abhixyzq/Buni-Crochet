import React, { useState } from 'react';
import {
  BRAND_ASSETS,
  PDP_GALLERY,
  PRODUCTS,
  ProductItem,
} from '../data/products';

interface MobileProductDetailsProps {
  product: ProductItem;
  onNavigateHome: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    variant?: string;
    qty?: number;
  }) => void;
  onInstantCheckout: (totalAmount: number, itemSummary: string) => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string, name: string) => void;
  onShowToast: (msg: string) => void;
}

const MOBILE_COLORS = [
  {
    id: 'ivory',
    shortLabel: 'Ivory Honey',
    fullLabel: 'Ivory & Honey Yellow',
    outerBg: '#f6f2e8',
    innerBg: '#e8b931',
  },
  {
    id: 'blush',
    shortLabel: 'Blush Rose',
    fullLabel: 'Vintage Blush',
    outerBg: '#fde9ea',
    innerBg: '#e08996',
  },
  {
    id: 'lavender',
    shortLabel: 'Lavender',
    fullLabel: 'Soft Lavender',
    outerBg: '#ede6f7',
    innerBg: '#a388cc',
  },
  {
    id: 'mix',
    shortLabel: 'Pastel Mix',
    fullLabel: 'Pastel Mix',
    isGradient: true,
  },
];

const MOBILE_CROSS_SELL = [
  PRODUCTS[1], // Mini Tulip Stem
  PRODUCTS[4], // Sunflower Keepsake
  PRODUCTS[2], // Heart Keychain
];

export const MobileProductDetails: React.FC<MobileProductDetailsProps> = ({
  product,
  onNavigateHome,
  onSelectProduct,
  onAddToCart,
  onInstantCheckout,
  wishlistIds,
  onToggleWishlist,
  onShowToast,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColorLabel, setSelectedColorLabel] = useState('Ivory & Honey Yellow');
  const [selectedSize, setSelectedSize] = useState<'petite' | 'deluxe'>('petite');
  const [basePrice, setBasePrice] = useState(product.price || 899);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);
  const [giftNote, setGiftNote] = useState('');
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({});

  const isWishlisted = wishlistIds.includes(product.id);
  const giftPrice = isGift ? 99 : 0;
  const totalPrice = (basePrice + giftPrice) * quantity;

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleMainAddToCart = () => {
    onAddToCart({
      id: `${product.id}-${selectedSize}-${selectedColorLabel}`,
      name: product.name,
      price: basePrice + giftPrice,
      image: PDP_GALLERY.mobileSlides[0],
      variant: `${selectedColorLabel} • ${
        selectedSize === 'petite' ? 'Petite (5 Stems)' : 'Full Deluxe (9 Stems)'
      }`,
      qty: quantity,
    });
  };

  return (
    <div className="bg-surface font-body text-on-surface flex flex-col min-h-screen antialiased relative">
      {/* HEADER */}
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-14 px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              aria-label="Back"
              type="button"
              onClick={onNavigateHome}
              className="w-11 h-11 flex items-center justify-center text-on-surface rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
            </button>
            <img
              alt="Buni Crochet Logo"
              onClick={onNavigateHome}
              className="h-8 w-auto object-contain cursor-pointer"
              src={BRAND_ASSETS.logo}
              referrerPolicy="no-referrer"
            />
            <h1 className="text-sm font-headline font-semibold text-on-surface ml-1 truncate max-w-[170px]">
              Product Details
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <button
              aria-label="Share"
              type="button"
              onClick={() => onShowToast('Product link copied to clipboard!')}
              className="w-11 h-11 flex items-center justify-center text-on-surface rounded-full active:bg-surface-container transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">share</span>
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
      <main className="flex-1 flex flex-col relative w-full bg-surface">
        <div className="flex flex-col w-full pb-24 select-none">
          {/* Visual Product Media Carousel */}
          <div className="relative w-full aspect-square bg-surface-container-high overflow-hidden">
            <div
              className="flex w-full h-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {PDP_GALLERY.mobileSlides.map((slideUrl, idx) => (
                <div key={idx} className="min-w-full h-full relative">
                  <img
                    className="w-full h-full object-cover"
                    alt={`${product.name} slide ${idx + 1}`}
                    src={slideUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>

            {/* Floating Top Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1 bg-surface/90 backdrop-blur-md text-primary font-medium text-xs px-2.5 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[14px] material-fill">spa</span>
                Handmade to Order
              </span>
              <span className="inline-flex items-center gap-1 bg-surface/90 backdrop-blur-md text-secondary font-medium text-xs px-2.5 py-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                Ships in 2-3 Days
              </span>
            </div>

            {/* Floating Action Wishlist */}
            <button
              aria-label="Save to Wishlist"
              type="button"
              onClick={() => onToggleWishlist(product.id, product.name)}
              className="absolute top-3 right-3 w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md shadow-sm flex items-center justify-center text-on-surface active:scale-90 transition-all z-10 cursor-pointer"
            >
              <span
                className={`material-symbols-outlined text-xl transition-colors ${
                  isWishlisted ? 'material-fill text-primary' : ''
                }`}
              >
                favorite
              </span>
            </button>

            {/* Carousel Indicator Pill */}
            <div className="absolute bottom-3 right-3 bg-inverse-surface/75 backdrop-blur-md text-inverse-on-surface text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
              <span>{currentSlide + 1}</span> / 5
            </div>

            {/* Micro Navigation Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-surface/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
              {PDP_GALLERY.mobileSlides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide ? 'bg-primary w-3' : 'w-1.5 bg-outline-variant'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Content Block */}
          <div className="px-4 pt-4 flex flex-col gap-4">
            {/* Title & Rating Header */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base material-fill">
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-on-surface">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-outline font-normal">(128 reviews)</span>
                <span className="text-[11px] font-medium bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full flex items-center gap-0.5 ml-auto">
                  <span className="material-symbols-outlined text-[12px] material-fill">
                    verified
                  </span>
                  Verified Handmade
                </span>
              </div>
              <h2 className="text-2xl font-headline font-bold text-on-surface leading-tight tracking-tight mt-1">
                {product.name}
              </h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold font-headline text-primary tracking-tight">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs line-through text-outline font-normal">₹1,199</span>
                <span className="text-[11px] font-semibold text-tertiary bg-tertiary-fixed px-1.5 py-0.5 rounded">
                  25% OFF
                </span>
                <span className="text-[11px] text-outline ml-auto">incl. of all taxes</span>
              </div>
            </div>

            {/* Quick Story Pill Box */}
            <div className="bg-surface-container-low rounded-xl p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container flex-shrink-0">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-on-surface">
                  Forever Blooms, Zero Spoilage
                </p>
                <p className="text-[11px] text-on-surface-variant truncate">
                  Crafted using 100% combed milk-cotton yarn that stays vibrant forever.
                </p>
              </div>
            </div>

            {/* Options Section */}
            <div className="flex flex-col gap-4 pt-1">
              {/* Color Variant Selection */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-on-surface tracking-wide uppercase">
                    Palette:
                  </span>
                  <span className="text-xs font-medium text-primary">{selectedColorLabel}</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {MOBILE_COLORS.map((col) => {
                    const active = selectedColorLabel === col.fullLabel;
                    return (
                      <button
                        key={col.id}
                        type="button"
                        onClick={() => setSelectedColorLabel(col.fullLabel)}
                        className={`relative flex flex-col items-center gap-1.5 p-2 rounded-xl bg-surface-container-lowest shadow-sm active:scale-95 transition-all cursor-pointer ${
                          active ? 'outline-2 outline-primary outline-offset-2' : ''
                        }`}
                      >
                        {col.isGradient ? (
                          <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f6f2e8] via-[#fde9ea] to-[#ede6f7] flex items-center justify-center shadow-inner">
                            <span className="material-symbols-outlined text-[13px] text-primary">
                              auto_awesome
                            </span>
                          </span>
                        ) : (
                          <span
                            className="w-7 h-7 rounded-full flex items-center justify-center shadow-inner relative overflow-hidden"
                            style={{ backgroundColor: col.outerBg }}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full"
                              style={{ backgroundColor: col.innerBg }}
                            ></span>
                          </span>
                        )}
                        <span className="text-[10px] font-medium text-on-surface text-center line-clamp-1">
                          {col.shortLabel}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Stem Count / Size Options */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-on-surface tracking-wide uppercase">
                  Bouquet Size:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSize('petite');
                      setBasePrice(899);
                    }}
                    className={`flex flex-col p-3 rounded-xl text-left transition-all shadow-sm cursor-pointer ${
                      selectedSize === 'petite'
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-low text-on-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-semibold">Petite (5 Stems)</span>
                      <span
                        className={`material-symbols-outlined text-sm ${
                          selectedSize === 'petite' ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        check_circle
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        selectedSize === 'petite' ? 'opacity-80' : 'text-on-surface-variant'
                      }`}
                    >
                      Classic mini bouquet
                    </p>
                    <span className="text-sm font-bold mt-2">₹899</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSize('deluxe');
                      setBasePrice(1499);
                    }}
                    className={`flex flex-col p-3 rounded-xl text-left transition-all shadow-sm cursor-pointer ${
                      selectedSize === 'deluxe'
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-low text-on-surface'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-semibold">Full Deluxe (9 Stems)</span>
                      <span
                        className={`material-symbols-outlined text-sm ${
                          selectedSize === 'deluxe' ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        check_circle
                      </span>
                    </div>
                    <p
                      className={`text-[11px] mt-0.5 ${
                        selectedSize === 'deluxe' ? 'opacity-80' : 'text-on-surface-variant'
                      }`}
                    >
                      Lush centerpiece
                    </p>
                    <span className="text-sm font-bold mt-2">₹1,499</span>
                  </button>
                </div>
              </div>

              {/* Quantity Row */}
              <div className="flex items-center justify-between bg-surface-container-lowest p-3 rounded-xl shadow-sm">
                <span className="text-xs font-medium text-on-surface">Quantity:</span>
                <div className="flex items-center gap-3 bg-surface-container-high rounded-full px-2 py-1">
                  <button
                    aria-label="Decrease Quantity"
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest active:scale-90 text-on-surface transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="text-xs font-bold text-on-surface min-w-[16px] text-center">
                    {quantity}
                  </span>
                  <button
                    aria-label="Increase Quantity"
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-surface-container-lowest active:scale-90 text-on-surface transition-transform cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>

              {/* Gifting & Personalization Box */}
              <div className="bg-surface-container-lowest rounded-xl p-3.5 shadow-sm flex flex-col gap-3 transition-all">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    checked={isGift}
                    onChange={(e) => setIsGift(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-0 cursor-pointer accent-primary"
                    type="checkbox"
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-on-surface">
                        Make it a Gift (+₹99)
                      </span>
                      <span className="text-[10px] bg-secondary-container text-on-secondary-container px-1.5 py-0.5 rounded font-medium">
                        Bestseller
                      </span>
                    </div>
                    <p className="text-[11px] text-on-surface-variant leading-snug">
                      Includes kraft paper wrap, satin ribbon, wax stamp &amp; custom note.
                    </p>
                  </div>
                </label>

                {isGift && (
                  <div className="flex flex-col gap-2.5 pt-2">
                    <div>
                      <label className="block text-[11px] font-medium text-on-surface-variant mb-1">
                        Handwritten Card Note (Free with Gift Wrap)
                      </label>
                      <textarea
                        value={giftNote}
                        onChange={(e) => setGiftNote(e.target.value)}
                        maxLength={150}
                        rows={2}
                        placeholder="e.g. Happy Birthday Diya! May your days bloom bright. With love, Kabir..."
                        className="w-full bg-surface-container-low text-on-surface text-xs p-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-outline resize-none"
                      />
                      <div className="text-[10px] text-outline text-right mt-0.5">
                        Max 150 characters
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-surface-container-low p-2 rounded-lg">
                      <span className="material-symbols-outlined text-primary text-base">
                        card_giftcard
                      </span>
                      <span className="text-[11px] text-on-surface font-medium">
                        Delivered directly in gift-ready aesthetic packaging
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout / Action Buttons */}
              <div className="flex flex-col gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleMainAddToCart}
                  className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-headline font-semibold text-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">shopping_bag</span>
                  <span>Add to Bag</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onInstantCheckout(
                      totalPrice,
                      `${quantity}x ${product.name} (${selectedColorLabel})`
                    )
                  }
                  className="w-full py-3 rounded-xl bg-tertiary-container text-on-tertiary-container font-headline font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">bolt</span>
                  <span>Buy Now • Instant UPI Checkout</span>
                </button>
              </div>

              {/* Trust & Artisan Badges (Mosaic) */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-surface-container-lowest p-3 rounded-xl flex items-start gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-lg">yard</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-on-surface">100% Handcrafted</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Spun with ultra-soft milk cotton
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl flex items-start gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-lg">
                    all_inclusive
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-on-surface">Everlasting Bloom</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Never wilts, zero water needed
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl flex items-start gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-lg">inventory_2</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-on-surface">Eco-Luxury Pack</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Sustainably boxed &amp; secured
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl flex items-start gap-2.5 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-lg">
                    rocket_launch
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-on-surface">Pan-India Courier</span>
                    <span className="text-[10px] text-on-surface-variant">
                      Safe tracked express transit
                    </span>
                  </div>
                </div>
              </div>

              {/* Accordion Details Section */}
              <div className="flex flex-col gap-2 mt-2">
                {/* Item 1 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('story')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-semibold text-xs text-on-surface cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        palette
                      </span>
                      Artisan Craft &amp; Story
                    </span>
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        openAccordions.story ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordions.story && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-on-surface-variant leading-relaxed">
                      Every daisy is individually hand-hooked by women artisans using time-tested crochet methods. Due to the slow handcrafted nature, no two blossoms are identically stamped—giving your bouquet a gentle, natural individuality reminiscent of fresh meadows.
                    </div>
                  )}
                </div>

                {/* Item 2 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('specs')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-semibold text-xs text-on-surface cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        straighten
                      </span>
                      Specifications &amp; Dimensions
                    </span>
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        openAccordions.specs ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordions.specs && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-on-surface-variant flex flex-col gap-1.5">
                      <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="font-medium text-on-surface">Stem Length:</span>
                        <span>~30 cm (Bendable floral wire)</span>
                      </div>
                      <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="font-medium text-on-surface">Flower Diameter:</span>
                        <span>~6.5 cm per bloom</span>
                      </div>
                      <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="font-medium text-on-surface">Material:</span>
                        <span>100% Cotton Yarn, iron wire core</span>
                      </div>
                      <div className="flex justify-between py-1 bg-surface-container-low px-2 rounded">
                        <span className="font-medium text-on-surface">Weight:</span>
                        <span>Approx. 180 grams</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Item 3 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('care')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-semibold text-xs text-on-surface cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        nest_eco_leaf
                      </span>
                      Care &amp; Longevity
                    </span>
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        openAccordions.care ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordions.care && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-on-surface-variant leading-relaxed">
                      • Dust gently with a soft dry brush or cool blowdryer setting once a month.
                      <br />
                      • Keep away from continuous direct soaking sunlight to preserve vibrant hues.
                      <br />• Stems are flexible; gently re-shape or prune with craft wire-cutters to fit your favorite vase.
                    </div>
                  )}
                </div>

                {/* Item 4 */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleAccordion('ship')}
                    className="w-full p-3.5 flex items-center justify-between text-left font-semibold text-xs text-on-surface cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-base">
                        local_shipping
                      </span>
                      Shipping &amp; Returns
                    </span>
                    <span
                      className={`material-symbols-outlined text-base transition-transform duration-200 ${
                        openAccordions.ship ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openAccordions.ship && (
                    <div className="px-3.5 pb-3.5 pt-0 text-xs text-on-surface-variant leading-relaxed">
                      • Handcrafted &amp; dispatched in 2-3 business days.
                      <br />
                      • Express air delivery (3-5 days across metro cities).
                      <br />
                      • Free standard shipping on orders over ₹999.
                      <br />• Packaged in sturdy reinforced cardboard boxes to ensure zero transit bending.
                    </div>
                  )}
                </div>
              </div>

              {/* Customer Reviews Preview Section */}
              <div className="mt-2 bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-headline font-bold text-on-surface">
                      Customer Reviews
                    </h3>
                    <p className="text-[11px] text-outline">
                      Real verified photos from homes across India
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onShowToast('Showing all 128 verified customer reviews')}
                    className="text-xs font-semibold text-primary underline cursor-pointer"
                  >
                    View all 128
                  </button>
                </div>

                <div className="flex items-center gap-3 bg-surface-container-low p-2.5 rounded-lg">
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-xl font-bold font-headline text-on-surface">4.9</span>
                    <div className="flex text-tertiary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-xs material-fill">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-1 text-[10px] text-outline">
                    <div className="flex items-center gap-2">
                      <span>5★</span>
                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[92%]"></div>
                      </div>
                      <span>92%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>4★</span>
                      <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[8%]"></div>
                      </div>
                      <span>8%</span>
                    </div>
                  </div>
                </div>

                {/* Review Card 1 */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold">
                        A
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-on-surface">Ananya Sen</span>
                        <span className="text-[10px] text-outline">Bengaluru • Verified Buyer</span>
                      </div>
                    </div>
                    <div className="flex text-tertiary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-xs material-fill">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    "Ordered this for my study table and it's absolute sunshine! The stitch quality is immaculate, no loose threads anywhere. My mother thought they were real from afar."
                  </p>
                  <div className="w-16 h-16 rounded-lg overflow-hidden mt-1 shadow-sm">
                    <img
                      className="w-full h-full object-cover"
                      alt="Customer photo review showing the crochet daisy bouquet"
                      src={BRAND_ASSETS.mobileReviewThumb}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center text-xs font-bold">
                        P
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-on-surface">Pranav Nair</span>
                        <span className="text-[10px] text-outline">
                          Mumbai • Verified Gift Buyer
                        </span>
                      </div>
                    </div>
                    <div className="flex text-tertiary">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-xs material-fill">
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    "Chose the gift packaging option with handwritten note for my anniversary. The wax seal and calligraphy note made it feel so personal and luxurious. 10/10 recommend!"
                  </p>
                </div>
              </div>

              {/* Cross-Sell / You May Also Love Carousel */}
              <div className="mt-3 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-headline font-bold text-on-surface">
                    You May Also Love
                  </h3>
                  <span className="text-xs text-primary font-medium">Buni Originals</span>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-none">
                  {MOBILE_CROSS_SELL.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-[150px] w-[150px] bg-surface-container-lowest rounded-xl p-2.5 shadow-sm snap-start flex flex-col"
                    >
                      <div
                        onClick={() => {
                          onSelectProduct(item);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container-high mb-2 cursor-pointer"
                      >
                        <img
                          className="w-full h-full object-cover"
                          alt={item.name}
                          src={item.mobileRecommendImage}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-xs font-semibold text-on-surface truncate">
                        {item.id === 'mini-crochet-tulip'
                          ? 'Mini Tulip Stem'
                          : item.id === 'crochet-heart-charm'
                          ? 'Heart Keychain'
                          : item.name}
                      </span>
                      <span className="text-[11px] text-outline">
                        {item.id === 'mini-crochet-tulip'
                          ? 'Single flower keepsake'
                          : item.id === 'crochet-heart-charm'
                          ? 'Bag accessory charm'
                          : 'Bright aesthetic flower'}
                      </span>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs font-bold text-primary">
                          ₹{item.price.toLocaleString('en-IN')}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            onAddToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.mobileRecommendImage,
                            })
                          }
                          className="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center active:scale-90 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Mobile Bottom Bar */}
        <div className="sticky bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-lg shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3 z-40 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold font-headline text-primary">
                ₹{totalPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-outline line-through">₹1,199</span>
            </div>
            <span className="text-[10px] font-medium text-secondary">
              Free delivery above ₹999
            </span>
          </div>
          <div className="flex items-center gap-2 flex-1 max-w-[230px]">
            <button
              type="button"
              onClick={handleMainAddToCart}
              className="flex-1 py-3 px-3 rounded-xl bg-primary text-on-primary font-headline font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">shopping_bag</span>
              <span>Add to Bag</span>
            </button>
            <button
              aria-label="Instant Checkout"
              type="button"
              onClick={() =>
                onInstantCheckout(
                  totalPrice,
                  `${quantity}x ${product.name} (${selectedColorLabel})`
                )
              }
              className="py-3 px-3 rounded-xl bg-tertiary text-on-tertiary font-headline font-semibold text-xs flex items-center justify-center shadow-sm active:scale-95 transition-transform cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">bolt</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
