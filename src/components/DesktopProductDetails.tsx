import React, { useState } from 'react';
import {
  BRAND_ASSETS,
  PDP_GALLERY,
  PRODUCTS,
  ProductItem,
} from '../data/products';

interface DesktopProductDetailsProps {
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
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenLightbox: (imgUrl: string) => void;
  onOpenReviewModal: () => void;
  customReviews: Array<{
    name: string;
    city: string;
    title: string;
    body: string;
    date: string;
  }>;
  onShowToast: (msg: string) => void;
}

const COLOR_OPTIONS = [
  { label: 'Ivory Honey', fullLabel: 'Ivory Honey (Natural Daisy)', bg: '#fff9e6' },
  { label: 'Blush Rose', fullLabel: 'Blush Rose Petals', bg: '#f7d5dd' },
  { label: 'Lavender', fullLabel: 'Lavender Fields', bg: '#d8cde9' },
  {
    label: 'Meadow Mix',
    fullLabel: 'Pastel Meadow Mix',
    bg: 'linear-gradient(135deg, #f7d5dd 0%, #fff9e6 50%, #d8cde9 100%)',
  },
];

const RECOMMENDATIONS = [
  PRODUCTS[1], // Mini Tulip Stem
  PRODUCTS[4], // Sunflower Keepsake
  PRODUCTS[2], // Crochet Heart Charm
  PRODUCTS[5], // Pastel Lavender Sprig
];

export const DesktopProductDetails: React.FC<DesktopProductDetailsProps> = ({
  product,
  onNavigateHome,
  onSelectProduct,
  onAddToCart,
  onInstantCheckout,
  wishlistIds,
  onToggleWishlist,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenLightbox,
  onOpenReviewModal,
  customReviews,
  onShowToast,
}) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState('Ivory Honey (Natural Daisy)');
  const [selectedSize, setSelectedSize] = useState<'petite' | 'deluxe'>('petite');
  const [basePrice, setBasePrice] = useState(product.price || 899);
  const [comparePrice, setComparePrice] = useState(product.comparePrice || 1199);
  const [qty, setQty] = useState(1);
  const [giftAddon, setGiftAddon] = useState(false);
  const [giftMessage, setGiftMessage] = useState('');
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<{
    type: 'valid' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });
  const [activeTab, setActiveTab] = useState<'craft' | 'specs' | 'care' | 'shipping'>('craft');
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [footerSubscribed, setFooterSubscribed] = useState(false);
  const [footerEmail, setFooterEmail] = useState('');

  // All 5 gallery display images
  const galleryImages = [
    PDP_GALLERY.desktopMain,
    PDP_GALLERY.desktopThumbs[1],
    PDP_GALLERY.desktopThumbs[2],
    PDP_GALLERY.desktopThumbs[3],
    PDP_GALLERY.desktopThumbs[4],
  ];

  const giftAddonCost = giftAddon ? 99 : 0;
  const finalTotal = (basePrice + giftAddonCost) * qty;
  const finalCompare = (comparePrice + giftAddonCost) * qty;
  const isMainWishlisted = wishlistIds.includes(product.id);

  const handleCheckPincode = () => {
    const trimmed = pincode.trim();
    if (trimmed.length === 6 && !isNaN(Number(trimmed))) {
      setPincodeStatus({
        type: 'valid',
        text: `Express delivery verified for ${trimmed}! Dispatches within 48 hours.`,
      });
    } else {
      setPincodeStatus({
        type: 'error',
        text: 'Please enter a valid 6-digit Indian PIN code.',
      });
    }
  };

  const handleAddToBag = () => {
    setAddedFeedback(true);
    onAddToCart({
      id: `${product.id}-${selectedSize}-${selectedShade}`,
      name: product.name,
      price: basePrice + giftAddonCost,
      image: galleryImages[0],
      variant: `${selectedShade} • ${selectedSize === 'petite' ? 'Petite (5 Stems)' : 'Deluxe (9 Stems)'}${
        giftAddon ? ' • +Gift Box' : ''
      }`,
      qty,
    });
    setTimeout(() => {
      setAddedFeedback(false);
    }, 2000);
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
              onClick={onNavigateHome}
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
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-sm tracking-wider uppercase transition-colors text-primary font-semibold border-b-2 border-primary pb-1 cursor-pointer"
              >
                Shop
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Collections
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Gifts
              </button>
              <button
                type="button"
                onClick={onNavigateHome}
                className="text-sm tracking-wider uppercase text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
              >
                Custom Orders
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('craft');
                  document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                }}
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
          <div className="relative w-full overflow-hidden">
            <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-4 pb-16">
              {/* 1. Breadcrumb Navigation */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-xs tracking-wider uppercase text-on-surface-variant">
                  <li>
                    <button
                      type="button"
                      onClick={onNavigateHome}
                      className="hover:text-primary transition-colors flex items-center gap-1 uppercase cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">cottage</span>
                      <span>Home</span>
                    </button>
                  </li>
                  <li className="text-outline-variant font-light">/</li>
                  <li>
                    <button
                      type="button"
                      onClick={onNavigateHome}
                      className="hover:text-primary transition-colors uppercase cursor-pointer"
                    >
                      Flower Bouquets
                    </button>
                  </li>
                  <li className="text-outline-variant font-light">/</li>
                  <li aria-current="page" className="text-on-surface font-semibold truncate max-w-xs">
                    {product.name}
                  </li>
                </ol>
              </nav>

              {/* 2. Two-Column Desktop Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Gallery Rail & Main Viewer */}
                <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-5 lg:sticky lg:top-28">
                  {/* Vertical Thumbnail Rail */}
                  <div className="flex md:flex-col gap-3.5 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0 scrollbar-none">
                    {PDP_GALLERY.desktopThumbs.map((thumbUrl, idx) => {
                      const active = activeMediaIndex === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveMediaIndex(idx)}
                          className={`relative w-20 h-24 rounded-lg overflow-hidden transition-all duration-300 group focus:outline-none cursor-pointer ${
                            active
                              ? 'ring-2 ring-primary shadow-sm opacity-100'
                              : 'opacity-70 hover:opacity-100 ring-0 hover:ring-2 hover:ring-primary/60'
                          }`}
                        >
                          <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            alt={`${product.name} thumbnail ${idx + 1}`}
                            src={thumbUrl}
                            referrerPolicy="no-referrer"
                          />
                          {active && <span className="absolute inset-0 bg-primary/10"></span>}
                        </button>
                      );
                    })}
                  </div>

                  {/* Main Interactive Viewport */}
                  <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-surface-container shadow-md group">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        alt={product.name}
                        src={galleryImages[activeMediaIndex]}
                        referrerPolicy="no-referrer"
                      />
                      {/* Floating Heirloom Badges */}
                      <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/90 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase text-on-surface shadow-sm">
                          <span className="material-symbols-outlined text-xs text-primary material-fill">
                            arrow_back_ios_new
                          </span>
                          100% Handmade to Order
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary-fixed text-[11px] font-semibold tracking-wider uppercase text-on-tertiary-fixed shadow-sm">
                          <span className="material-symbols-outlined text-xs">local_shipping</span>
                          Dispatches in 48 Hrs
                        </span>
                      </div>

                      {/* Zoom & Wishlist Hotkeys */}
                      <div className="absolute top-4 right-4 flex flex-col gap-2">
                        <button
                          aria-label="Add to Wishlist"
                          type="button"
                          onClick={() => onToggleWishlist(product.id, product.name)}
                          className={`w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer ${
                            isMainWishlisted ? 'text-error' : 'text-on-surface hover:text-error'
                          }`}
                        >
                          <span
                            className={`material-symbols-outlined text-lg ${
                              isMainWishlisted ? 'material-fill' : ''
                            }`}
                          >
                            favorite
                          </span>
                        </button>
                        <button
                          aria-label="Expand image"
                          type="button"
                          onClick={() => onOpenLightbox(galleryImages[activeMediaIndex])}
                          className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-md text-on-surface hover:text-primary flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-lg">fullscreen</span>
                        </button>
                      </div>

                      {/* Micro Caption Pill */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-inverse-surface/80 backdrop-blur-md text-inverse-on-surface text-[10px] tracking-widest uppercase">
                          Single Needle Stitch • 4.5 Hours Crafting Time
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface text-[10px] font-mono font-medium">
                          {activeMediaIndex + 1}/5
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Product Buy Box & Customization */}
                <div className="lg:col-span-5 flex flex-col">
                  {/* Brand & Hierarchy */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase font-semibold tracking-[0.2em] text-secondary">
                        Buni Originals • Artisanal Florals
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary tracking-wide uppercase">
                        <span className="material-symbols-outlined text-sm">verified</span> Verified
                        Artisan Made
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-headline font-bold text-on-surface tracking-tight leading-tight">
                      {product.name}
                    </h1>
                  </div>

                  {/* Social Proof / Rating */}
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-2.5 py-1 rounded-full text-xs font-bold tracking-wider">
                      <span>{product.rating.toFixed(1)}</span>
                      <span className="material-symbols-outlined text-xs material-fill">star</span>
                    </div>
                    <a
                      className="text-xs text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-outline-variant font-medium transition-colors"
                      href="#reviews-anchor"
                    >
                      128 verified handcrafted reviews
                    </a>
                    <span className="text-outline-variant">•</span>
                    <span className="text-xs text-secondary font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      14 crafted this week
                    </span>
                  </div>

                  {/* Price Engine */}
                  <div className="mt-5 p-4 rounded-xl bg-surface-container-low shadow-sm">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold font-headline text-on-surface">
                        ₹{finalTotal.toLocaleString('en-IN')}
                      </span>
                      <span className="text-base text-on-surface-variant line-through font-normal">
                        ₹{finalCompare.toLocaleString('en-IN')}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide">
                        25% SAVINGS
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-on-surface-variant">
                      <span>Inclusive of all GST &amp; hand-wrapping.</span>
                      <span className="text-tertiary font-semibold flex items-center gap-0.5">
                        <span className="material-symbols-outlined text-xs">local_shipping</span>{' '}
                        Free Shipping Across India
                      </span>
                    </div>
                  </div>

                  {/* Everlasting Value Highlight */}
                  <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-primary-fixed/40 to-surface-container flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <span className="material-symbols-outlined text-sm">all_inclusive</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-on-surface">
                        Everlasting Blooms, Zero Spoilage
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        Spun with double-twisted 100% combed milk-cotton yarn. Never withers, drops pollen, or requires water—a keepsake that stays alive for years.
                      </p>
                    </div>
                  </div>

                  {/* Customization Stack */}
                  <div className="mt-6 space-y-6">
                    {/* 1. Color Palette Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface flex items-center gap-1.5">
                          <span>Color Harmony:</span>
                          <span className="text-primary font-normal">{selectedShade}</span>
                        </label>
                        <span className="text-[11px] text-on-surface-variant italic">
                          Vegetable-dyed cotton
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {COLOR_OPTIONS.map((opt) => {
                          const active = selectedShade === opt.fullLabel;
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setSelectedShade(opt.fullLabel)}
                              className={`group flex items-center gap-2.5 p-2 rounded-lg transition-all text-left cursor-pointer ${
                                active
                                  ? 'bg-surface-container-highest shadow-sm ring-2 ring-primary'
                                  : 'bg-surface-container hover:bg-surface-container-high'
                              }`}
                            >
                              <span
                                className="w-5 h-5 rounded-full border-2 border-surface shrink-0 shadow-sm"
                                style={{ background: opt.bg }}
                              ></span>
                              <span
                                className={`text-xs text-on-surface ${
                                  active ? 'font-semibold' : 'font-medium'
                                }`}
                              >
                                {opt.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Bouquet Stem Sizing */}
                    <div>
                      <div className="flex items-center justify-between mb-2.5">
                        <label className="text-xs font-bold uppercase tracking-wider text-on-surface">
                          Select Bouquet Size
                        </label>
                        <span className="text-[11px] text-secondary font-medium">
                          Stems pliable &amp; adjustable
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSize('petite');
                            setBasePrice(899);
                            setComparePrice(1199);
                          }}
                          className={`relative p-3 rounded-xl text-left transition-all cursor-pointer ${
                            selectedSize === 'petite'
                              ? 'bg-surface-container-highest shadow-sm ring-2 ring-primary'
                              : 'bg-surface-container hover:bg-surface-container-high'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-on-surface">
                              Petite • 5 Stems
                            </span>
                            <span className="text-xs font-bold text-primary">₹899</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                            Classic mini handheld bunch. Perfect for bedside or desks.
                          </p>
                          <span className="mt-2 inline-block text-[10px] tracking-wider uppercase font-semibold text-secondary">
                            Active Choice
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSize('deluxe');
                            setBasePrice(1499);
                            setComparePrice(1899);
                          }}
                          className={`relative p-3 rounded-xl text-left transition-all cursor-pointer ${
                            selectedSize === 'deluxe'
                              ? 'bg-surface-container-highest shadow-sm ring-2 ring-primary'
                              : 'bg-surface-container hover:bg-surface-container-high'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-on-surface">
                              Deluxe • 9 Stems
                            </span>
                            <span className="text-xs font-bold text-on-surface">₹1,499</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
                            Lush centerpiece bundle with accent foliage sprigs.
                          </p>
                          <span className="mt-2 inline-block text-[10px] tracking-wider uppercase font-bold text-tertiary">
                            Most Gifted (+₹600)
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* 3. Quantity & Gifting Suite */}
                    <div className="pt-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center rounded-xl bg-surface-container p-1 shadow-sm">
                          <button
                            aria-label="Decrease quantity"
                            type="button"
                            onClick={() => setQty((q) => Math.max(1, q - 1))}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-on-surface hover:text-primary active:scale-95 transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-base">remove</span>
                          </button>
                          <span className="w-10 text-center font-bold text-sm text-on-surface font-mono">
                            {qty}
                          </span>
                          <button
                            aria-label="Increase quantity"
                            type="button"
                            onClick={() => setQty((q) => Math.min(10, q + 1))}
                            className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-on-surface hover:text-primary active:scale-95 transition-all cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-base">add</span>
                          </button>
                        </div>
                        <div className="text-xs text-on-surface-variant">
                          <span className="font-medium text-on-surface">Hand-made Batch:</span> Only
                          6 spots left for this shipping window.
                        </div>
                      </div>
                    </div>

                    {/* Gifting & Wax Seal Add-On Box */}
                    <div className="p-4 rounded-xl bg-surface-container-high shadow-sm space-y-3">
                      <div className="flex items-start gap-3">
                        <input
                          checked={giftAddon}
                          onChange={(e) => setGiftAddon(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary accent-primary cursor-pointer"
                          id="gift-addon"
                          type="checkbox"
                        />
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => setGiftAddon((g) => !g)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-on-surface">
                              Make it a Curated Gift Box
                            </span>
                            <span className="text-xs font-bold text-tertiary">+₹99</span>
                          </div>
                          <p className="text-[11px] text-on-surface-variant mt-0.5 leading-relaxed">
                            Includes eco-kraft wrap, plum satin ribbon, calligraphed card, and hand-stamped botanical wax seal.
                          </p>
                        </div>
                      </div>

                      {giftAddon && (
                        <div className="pt-2 space-y-1.5">
                          <label
                            className="text-[11px] font-semibold text-on-surface uppercase tracking-wider flex items-center justify-between"
                            htmlFor="gift-msg"
                          >
                            <span>Custom Handwritten Card Message</span>
                            <span className="font-mono text-outline font-normal">
                              {giftMessage.length}/200
                            </span>
                          </label>
                          <textarea
                            id="gift-msg"
                            value={giftMessage}
                            onChange={(e) => setGiftMessage(e.target.value)}
                            maxLength={200}
                            rows={2}
                            placeholder="e.g., Happy Birthday Ananya! Forever blooming just like our bond... With love, Arjun"
                            className="w-full text-xs p-3 rounded-lg bg-surface-container-lowest text-on-surface placeholder-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                          />
                        </div>
                      )}
                    </div>

                    {/* CTA Action Buttons */}
                    <div className="space-y-3 pt-2">
                      <button
                        type="button"
                        onClick={handleAddToBag}
                        className={`w-full py-4 px-6 rounded-xl text-on-primary font-semibold tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-md active:scale-[0.99] transition-all cursor-pointer ${
                          addedFeedback
                            ? 'bg-tertiary'
                            : 'bg-primary hover:bg-primary-container hover:text-on-primary-container'
                        }`}
                      >
                        <span className="material-symbols-outlined text-lg">shopping_bag</span>
                        <span>
                          {addedFeedback
                            ? '✓ Added to Bag!'
                            : `Add to Bag • ₹${finalTotal.toLocaleString('en-IN')}`}
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          onInstantCheckout(
                            finalTotal,
                            `${qty}x ${product.name} (${selectedShade})`
                          )
                        }
                        className="w-full py-3.5 px-6 rounded-xl bg-tertiary-container text-on-tertiary-container font-bold tracking-wider uppercase text-xs flex items-center justify-center gap-2 shadow-sm hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-lg material-fill">
                          bolt
                        </span>
                        <span>Buy Now • Instant UPI / QR Checkout</span>
                      </button>
                    </div>

                    {/* Pincode Delivery Estimator */}
                    <div className="p-3.5 rounded-xl bg-surface-container flex flex-col gap-2.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-on-surface flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-sm text-primary">
                            pin_drop
                          </span>{' '}
                          Check Delivery Pincode
                        </span>
                        <span className="text-[11px] text-on-surface-variant font-mono">
                          PAN-INDIA
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <input
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          maxLength={6}
                          placeholder="Enter 6-digit Pincode (e.g. 400001)"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container-lowest text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary font-mono shadow-inner"
                          type="text"
                        />
                        <button
                          type="button"
                          onClick={handleCheckPincode}
                          className="px-4 py-2 rounded-lg bg-surface text-on-surface hover:bg-primary hover:text-on-primary text-xs font-bold tracking-wider uppercase shadow-sm transition-all shrink-0 cursor-pointer"
                        >
                          Check
                        </button>
                      </div>
                      {pincodeStatus.type && (
                        <p
                          className={`text-[11px] font-medium flex items-center gap-1 ${
                            pincodeStatus.type === 'valid' ? 'text-tertiary' : 'text-error'
                          }`}
                        >
                          {pincodeStatus.type === 'valid' && (
                            <span className="material-symbols-outlined text-xs">check_circle</span>
                          )}
                          <span>{pincodeStatus.text}</span>
                        </p>
                      )}
                    </div>

                    {/* Trust Badges Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                      <div className="flex flex-col items-center text-center p-2 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-primary text-xl mb-1">
                          pan_tool
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">
                          100% Handcrafted
                        </span>
                        <span className="text-[9px] text-on-surface-variant">
                          4.5 hrs artisan time
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-center p-2 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-tertiary text-xl mb-1">
                          spa
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">
                          Milk Cotton
                        </span>
                        <span className="text-[9px] text-on-surface-variant">
                          Allergy-free softness
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-center p-2 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-secondary text-xl mb-1">
                          inventory_2
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">
                          Crush-Proof Box
                        </span>
                        <span className="text-[9px] text-on-surface-variant">
                          Triple corrugated
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-center p-2 rounded-lg bg-surface-container-low">
                        <span className="material-symbols-outlined text-primary text-xl mb-1">
                          published_with_changes
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface">
                          Easy Exchange
                        </span>
                        <span className="text-[9px] text-on-surface-variant">
                          Hassle-free guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Deep-Dive Story & Specification Tabs */}
              <div className="mt-20 pt-8 border-none">
                <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none" id="info-tabs">
                  {[
                    { id: 'craft', label: 'Artisan Craft & Story' },
                    { id: 'specs', label: 'Specifications & Dimensions' },
                    { id: 'care', label: 'Care & Longevity' },
                    { id: 'shipping', label: 'Shipping & Pan-India Dispatch' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all cursor-pointer ${
                        activeTab === tab.id
                          ? 'bg-primary text-on-primary shadow-sm'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-surface-container p-6 lg:p-10 shadow-sm min-h-[280px]">
                  {activeTab === 'craft' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-4">
                        <span className="text-xs uppercase font-bold tracking-[0.2em] text-tertiary">
                          Bespoke Heritage Artistry
                        </span>
                        <h3 className="text-2xl font-headline font-bold text-on-surface">
                          Each Petal Knitted With Intention, Patience &amp; Heart.
                        </h3>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          In a modern world of fast disposable blooms that wither away in 48 hours, the Buni Crochet Daisy Bouquet celebrates slow, enduring affection. Every single stem is shaped individually using micro-crochet single-needle stitches, requiring over 4.5 dedicated hours from our master artisan collective based across rural Maharashtra and Karnataka.
                        </p>
                        <p className="text-sm text-on-surface-variant leading-relaxed">
                          We select premium five-ply combed milk cotton yarn known for its soft velvet sheen, pill-resistant tenacity, and rich natural drape. The floral core is filled with hypoallergenic poly-fluff, providing plush volume that retains its structural silhouette indefinitely.
                        </p>
                        <div className="pt-2 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 shadow-sm">
                            <img
                              className="w-full h-full object-cover"
                              alt="Portrait of master Indian crochet artisan Sunita Sharma"
                              src={BRAND_ASSETS.sunitaAvatar}
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-on-surface uppercase tracking-wide">
                              Handcrafted by Sunita Sharma &amp; Collective
                            </p>
                            <p className="text-[11px] text-secondary">
                              Kolhapur Artisan Cluster • Direct Fair Trade Guild
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-5 rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-highest shadow-inner">
                        <img
                          className="w-full h-full object-cover"
                          alt="Artisan hands intricately crocheting white daisy petals"
                          src={BRAND_ASSETS.craftTabImage}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-headline font-bold text-on-surface">
                          Dimensional Breakdown
                        </h4>
                        <dl className="space-y-3 text-xs">
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Total Bouquet Height
                            </dt>
                            <dd className="font-bold text-on-surface">
                              Approx. 28 cm – 32 cm (~12 inches)
                            </dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Flower Bloom Diameter
                            </dt>
                            <dd className="font-bold text-on-surface">6.5 cm per daisy head</dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Stem Count
                            </dt>
                            <dd className="font-bold text-on-surface">
                              5 Stems (Petite) or 9 Stems (Deluxe)
                            </dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Total Weight
                            </dt>
                            <dd className="font-bold text-on-surface">
                              ~180 grams (Ultra lightweight)
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-headline font-bold text-on-surface">
                          Materials &amp; Composition
                        </h4>
                        <dl className="space-y-3 text-xs">
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Yarn Composition
                            </dt>
                            <dd className="font-bold text-on-surface">
                              100% Combed Milk-Cotton (Oeko-Tex)
                            </dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Internal Core
                            </dt>
                            <dd className="font-bold text-on-surface">
                              Bendable galvanized craft wire
                            </dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Wrapping Paper
                            </dt>
                            <dd className="font-bold text-on-surface">
                              Forest Stewardship certified craft pulp
                            </dd>
                          </div>
                          <div className="flex justify-between py-2 border-b border-surface-container-highest">
                            <dt className="text-on-surface-variant uppercase tracking-wider">
                              Ribbon Accent
                            </dt>
                            <dd className="font-bold text-on-surface">
                              Double-sided soft woven satin
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  )}

                  {activeTab === 'care' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">
                          cleaning_services
                        </span>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                          Gentle Dust Cleaning
                        </h5>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Every few months, use a soft cosmetic makeup brush or a hairdryer on the coolest, lowest speed setting to remove airborne dust.
                        </p>
                      </div>
                      <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">
                          water_drop
                        </span>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                          Keep Dry &amp; Moisture-Free
                        </h5>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          Do not spray water, perfume, or essential oils directly onto yarn petals. If spot cleaned, dab gently with a mildly damp microfiber cloth.
                        </p>
                      </div>
                      <div className="p-5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                        <span className="material-symbols-outlined text-primary text-2xl">
                          wb_sunny
                        </span>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-on-surface">
                          Sunlight Recommendation
                        </h5>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          While our dyes are UV-stabilized, keep away from prolonged, blazing direct midday Indian summer sun to preserve vivid hues forever.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="space-y-4 text-xs text-on-surface-variant">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <h5 className="text-sm font-bold uppercase tracking-wider text-on-surface">
                            Pan-India Express Logistics
                          </h5>
                          <p className="leading-relaxed">
                            Every bouquet is crafted fresh upon order placement. We hand over finished parcels to Blue Dart, Delhivery Express, or DTDC within 48 business hours.
                          </p>
                          <ul className="space-y-1.5 list-disc pl-4">
                            <li>
                              <strong>Metros (Mumbai, Delhi-NCR, Bengaluru, Pune):</strong> 2–3
                              business days.
                            </li>
                            <li>
                              <strong>Tier 2 &amp; Tier 3 Cities:</strong> 3–5 business days.
                            </li>
                            <li>
                              <strong>Northeast &amp; J&amp;K:</strong> 5–7 business days.
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <h5 className="text-sm font-bold uppercase tracking-wider text-on-surface">
                            Damage-Free Transit Guarantee
                          </h5>
                          <p className="leading-relaxed">
                            Your bouquet is cushioned inside a rigid 5-ply corrugated keepsake carton with biodegradable shredded crinkle fillers, ensuring your floral arrangement arrives perfectly fluffy and intact.
                          </p>
                          <div className="p-3 rounded-lg bg-surface-container-highest text-[11px] font-medium text-on-surface">
                            Unboxing video recommended: in the rare event of transit damage, we issue an immediate priority remake at zero additional cost.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 4. Verified Customer Reviews & Community Gallery */}
              <section className="mt-20" id="reviews-anchor">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-secondary">
                      Real Indian Homes &amp; Stories
                    </span>
                    <h2 className="text-3xl font-headline font-bold text-on-surface mt-1">
                      Customer Reviews &amp; Photos
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenReviewModal}
                    className="self-start md:self-auto px-5 py-2.5 rounded-full bg-secondary text-on-secondary text-xs font-semibold uppercase tracking-wider hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm cursor-pointer"
                  >
                    Write a Review
                  </button>
                </div>

                {/* Rating Stat Grid Bento */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 lg:p-8 rounded-2xl bg-surface-container shadow-sm items-center">
                  <div className="lg:col-span-4 flex flex-col items-center justify-center text-center pr-0 lg:pr-8 border-none">
                    <span className="text-6xl font-headline font-bold text-on-surface">4.9</span>
                    <div className="flex items-center gap-1 text-tertiary mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-xl material-fill">
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-on-surface-variant mt-2 font-medium">
                      Based on {128 + customReviews.length} verified customer purchases
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-tertiary px-3 py-1 rounded-full bg-tertiary-fixed/60">
                      <span className="material-symbols-outlined text-xs">thumb_up</span> 99% would
                      recommend to a friend
                    </span>
                  </div>

                  {/* Breakdown Bars */}
                  <div className="lg:col-span-8 space-y-2.5">
                    {[
                      { label: '5 Star', pct: '92%' },
                      { label: '4 Star', pct: '8%' },
                      { label: '3 Star', pct: '0%' },
                      { label: '2 Star', pct: '0%' },
                      { label: '1 Star', pct: '0%' },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3 text-xs">
                        <span className="w-12 font-medium text-on-surface">{row.label}</span>
                        <div className="flex-1 h-2.5 rounded-full bg-surface-container-highest overflow-hidden">
                          <div
                            className="h-full bg-tertiary rounded-full"
                            style={{ width: row.pct }}
                          ></div>
                        </div>
                        <span className="w-10 text-right font-mono font-medium text-on-surface-variant">
                          {row.pct}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customer Snapshot Gallery Strip */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">
                      photo_library
                    </span>{' '}
                    Photos from Buni Gifting Circle
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {PDP_GALLERY.giftingCirclePhotos.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        onClick={() => onOpenLightbox(imgUrl)}
                        className="aspect-square rounded-xl overflow-hidden bg-surface-container-highest group relative shadow-sm cursor-pointer"
                      >
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={`Customer review snapshot ${idx + 1}`}
                          src={imgUrl}
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-inverse-surface/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="material-symbols-outlined text-inverse-on-surface text-lg">
                            visibility
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Review Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {customReviews.map((rev, i) => (
                    <div
                      key={`custom-${i}`}
                      className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-tertiary">
                            {[...Array(5)].map((_, s) => (
                              <span
                                key={s}
                                className="material-symbols-outlined text-base material-fill"
                              >
                                star
                              </span>
                            ))}
                          </div>
                          <span className="text-[11px] text-on-surface-variant font-mono">
                            {rev.date}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-on-surface">"{rev.title}"</h4>
                        <p className="text-xs text-on-surface-variant leading-relaxed">
                          {rev.body}
                        </p>
                      </div>
                      <div className="mt-5 pt-3 flex items-center justify-between border-t border-surface-container-highest/60 text-xs">
                        <div>
                          <p className="font-bold text-on-surface">{rev.name}</p>
                          <p className="text-[10px] text-secondary">
                            {rev.city} • Verified Buyer
                          </p>
                        </div>
                        <span className="material-symbols-outlined text-primary text-base">
                          check_circle
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Default Review 1 */}
                  <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-tertiary">
                          {[...Array(5)].map((_, s) => (
                            <span
                              key={s}
                              className="material-symbols-outlined text-base material-fill"
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-mono">
                          3 days ago
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface">
                        "Infinitely better than real flowers that wilt!"
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Gifted this to my best friend for her new apartment in Bandra. She was stunned by the stitch detailing and the wax seal note. It still looks brand new on her coffee table!
                      </p>
                    </div>
                    <div className="mt-5 pt-3 flex items-center justify-between border-t border-surface-container-highest/60 text-xs">
                      <div>
                        <p className="font-bold text-on-surface">Rhea Deshmukh</p>
                        <p className="text-[10px] text-secondary">Mumbai, MH • Verified Buyer</p>
                      </div>
                      <span className="material-symbols-outlined text-primary text-base">
                        check_circle
                      </span>
                    </div>
                  </div>

                  {/* Default Review 2 */}
                  <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-tertiary">
                          {[...Array(5)].map((_, s) => (
                            <span
                              key={s}
                              className="material-symbols-outlined text-base material-fill"
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-mono">
                          1 week ago
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface">
                        "Safe packing and buttery soft yarn"
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        I was terrified the stems would get squashed during courier to Delhi, but the box packaging is rock solid. The yarn feels like pure cloud cotton. Will order the Sunflower next!
                      </p>
                    </div>
                    <div className="mt-5 pt-3 flex items-center justify-between border-t border-surface-container-highest/60 text-xs">
                      <div>
                        <p className="font-bold text-on-surface">Aarav Malhotra</p>
                        <p className="text-[10px] text-secondary">New Delhi, DL • Verified Buyer</p>
                      </div>
                      <span className="material-symbols-outlined text-primary text-base">
                        check_circle
                      </span>
                    </div>
                  </div>

                  {/* Default Review 3 */}
                  <div className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-tertiary">
                          {[...Array(5)].map((_, s) => (
                            <span
                              key={s}
                              className="material-symbols-outlined text-base material-fill"
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-mono">
                          2 weeks ago
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-on-surface">
                        "The stems bend easily for any vase"
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">
                        Loved the flexible inner wire so I could adjust the height to fit my ceramic jug. The handwritten calligraphy note felt so heartfelt. Thank you Buni artisans!
                      </p>
                    </div>
                    <div className="mt-5 pt-3 flex items-center justify-between border-t border-surface-container-highest/60 text-xs">
                      <div>
                        <p className="font-bold text-on-surface">Pooja Kulkarni</p>
                        <p className="text-[10px] text-secondary">Bengaluru, KA • Verified Buyer</p>
                      </div>
                      <span className="material-symbols-outlined text-primary text-base">
                        check_circle
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. 'You May Also Love' Recommended Pairings */}
              <section className="mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-[0.2em] text-secondary">
                      Pair &amp; Create Your Floral Garden
                    </span>
                    <h2 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mt-1">
                      You May Also Love
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={onNavigateHome}
                    className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-container flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Explore All 24 Florals</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {RECOMMENDATIONS.map((rec) => {
                    const isRecWishlisted = wishlistIds.includes(rec.id);
                    return (
                      <div
                        key={rec.id}
                        className="group rounded-2xl bg-surface-container-low overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div
                            onClick={() => {
                              onSelectProduct(rec);
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="relative aspect-square overflow-hidden bg-surface-container cursor-pointer"
                          >
                            <img
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              alt={rec.name}
                              src={rec.pdpRecommendImage}
                              referrerPolicy="no-referrer"
                            />
                            <button
                              aria-label="Add to Wishlist"
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleWishlist(rec.id, rec.name);
                              }}
                              className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center shadow-sm cursor-pointer ${
                                isRecWishlisted ? 'text-error' : 'text-on-surface hover:text-error'
                              }`}
                            >
                              <span
                                className={`material-symbols-outlined text-sm ${
                                  isRecWishlisted ? 'material-fill' : ''
                                }`}
                              >
                                favorite
                              </span>
                            </button>
                            <span
                              className={`absolute bottom-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${
                                rec.badgeType === 'tertiary'
                                  ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                                  : 'bg-surface/90 backdrop-blur text-on-surface'
                              }`}
                            >
                              {rec.badge === 'Top Rated' ? 'Bag Charm' : rec.badge}
                            </span>
                          </div>
                          <div className="p-4 space-y-1">
                            <p className="text-[10px] uppercase font-bold tracking-widest text-secondary">
                              {rec.tagLabel}
                            </p>
                            <button
                              type="button"
                              onClick={() => {
                                onSelectProduct(rec);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors text-left cursor-pointer"
                            >
                              {rec.name}
                            </button>
                            <div className="flex items-center gap-2 pt-1">
                              <span className="text-sm font-bold text-on-surface font-headline">
                                ₹{rec.price.toLocaleString('en-IN')}
                              </span>
                              <span className="text-xs text-on-surface-variant line-through">
                                ₹{rec.comparePrice.toLocaleString('en-IN')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4 pt-0">
                          <button
                            type="button"
                            onClick={() =>
                              onAddToCart({
                                id: rec.id,
                                name: rec.name,
                                price: rec.price,
                                image: rec.pdpRecommendImage,
                              })
                            }
                            className="w-full py-2 px-3 rounded-lg bg-surface text-on-surface hover:bg-primary hover:text-on-primary text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-sm">add</span> Quick Add
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
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
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Best Sellers
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Flower Bouquets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Amigurumi &amp; Keepsakes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Bags &amp; Accessories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
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
                  onClick={() => {
                    setActiveTab('shipping');
                    document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Shipping &amp; Delivery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('shipping');
                    document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Returns &amp; Exchanges
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('care');
                    document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
                  onClick={() => {
                    setActiveTab('craft');
                    document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('craft');
                    document.getElementById('info-tabs')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Meet the Artisans
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="hover:text-on-surface transition-colors cursor-pointer"
                >
                  Custom Gifting Studio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
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
                  onClick={() => onShowToast('Opening Buni Crochet Pinterest')}
                  aria-label="Pinterest"
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[17px]">push_pin</span>
                </button>
                <button
                  type="button"
                  onClick={() => onShowToast('Opening Buni Crochet YouTube')}
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
