/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { DesktopHome } from './components/DesktopHome';
import { DesktopProductDetails } from './components/DesktopProductDetails';
import { MobileHome } from './components/MobileHome';
import { MobileProductDetails } from './components/MobileProductDetails';
import { CartItem, Overlays } from './components/Overlays';
import { PRODUCTS, ProductItem } from './data/products';

type ScreenPage = 'home' | 'product';
type ViewportMode = 'auto' | 'desktop' | 'mobile';

export default function App() {
  const [activePage, setActivePage] = useState<ScreenPage>('home');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('auto');
  const [isMobileWindow, setIsMobileWindow] = useState<boolean>(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[0]);

  // Cart & Wishlist state initialized to match header counts in the screenshots (Cart: 2, Wishlist: 3)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: PRODUCTS[0].id,
      name: PRODUCTS[0].name,
      price: PRODUCTS[0].price,
      image: PRODUCTS[0].desktopImage,
      variant: 'Ivory Honey (Natural Daisy) • Petite (5 Stems)',
      qty: 1,
    },
    {
      id: PRODUCTS[1].id,
      name: PRODUCTS[1].name,
      price: PRODUCTS[1].price,
      image: PRODUCTS[1].desktopImage,
      variant: 'Includes mini ceramic stem stand',
      qty: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>([
    PRODUCTS[0].id,
    PRODUCTS[1].id,
    PRODUCTS[2].id,
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [lightboxUrl, setLightboxUrl] = useState<string | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [customReviews, setCustomReviews] = useState<
    Array<{ name: string; city: string; title: string; body: string; date: string }>
  >([]);
  const [checkoutModal, setCheckoutModal] = useState<{
    open: boolean;
    amount: number;
    summary: string;
  }>({ open: false, amount: 0, summary: '' });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileWindow(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2400);
  };

  const handleAddToCart = (newItem: {
    id: string;
    name: string;
    price: number;
    image: string;
    variant?: string;
    qty?: number;
  }) => {
    const addQty = newItem.qty || 1;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === newItem.id);
      if (existing) {
        return prev.map((i) => (i.id === newItem.id ? { ...i, qty: i.qty + addQty } : i));
      }
      return [
        ...prev,
        {
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          variant: newItem.variant,
          qty: addQty,
        },
      ];
    });
    showToast(`${newItem.name} added to your Bag!`);
  };

  const handleUpdateCartQty = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0)
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    showToast('Item removed from Bag');
  };

  const handleToggleWishlist = (id: string, name: string) => {
    setWishlistIds((prev) => {
      if (prev.includes(id)) {
        showToast(`Removed ${name} from Wishlist`);
        return prev.filter((item) => item !== id);
      } else {
        showToast(`Saved ${name} to your Wishlist ❤️`);
        return [...prev, id];
      }
    });
  };

  const handleNavigateToProduct = (product?: ProductItem) => {
    if (product) {
      setSelectedProduct(product);
    }
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const effectiveIsMobile =
    viewportMode === 'mobile' ? true : viewportMode === 'desktop' ? false : isMobileWindow;

  return (
    <div className="min-h-screen bg-[#f2ecf4] relative">
      {/* Screen Switcher Toolbar so user can inspect all 4 screens (Desktop Home, Desktop PDP, Mobile Home, Mobile PDP) at any time */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 bg-inverse-surface/95 text-inverse-on-surface backdrop-blur-md p-1.5 rounded-full shadow-xl border border-white/10 text-[11px] font-medium">
        <button
          type="button"
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
            activePage === 'home'
              ? 'bg-primary text-on-primary font-semibold shadow-xs'
              : 'hover:bg-white/10 text-inverse-on-surface/80'
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">cottage</span>
          <span>Home</span>
        </button>
        <button
          type="button"
          onClick={() => {
            setActivePage('product');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`px-3 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
            activePage === 'product'
              ? 'bg-primary text-on-primary font-semibold shadow-xs'
              : 'hover:bg-white/10 text-inverse-on-surface/80'
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">local_florist</span>
          <span>Product Details</span>
        </button>
        <div className="h-4 w-[1px] bg-white/20 mx-0.5"></div>
        <button
          type="button"
          title="Desktop View"
          onClick={() =>
            setViewportMode((m) => (m === 'desktop' ? 'auto' : 'desktop'))
          }
          className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
            !effectiveIsMobile
              ? 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold'
              : 'hover:bg-white/10 text-inverse-on-surface/80'
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">desktop_windows</span>
          <span className="hidden sm:inline">Desktop</span>
        </button>
        <button
          type="button"
          title="Mobile View (390px Frame)"
          onClick={() =>
            setViewportMode((m) => (m === 'mobile' ? 'auto' : 'mobile'))
          }
          className={`px-2.5 py-1.5 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
            effectiveIsMobile
              ? 'bg-tertiary-fixed text-on-tertiary-fixed font-semibold'
              : 'hover:bg-white/10 text-inverse-on-surface/80'
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">smartphone</span>
          <span className="hidden sm:inline">Mobile</span>
        </button>
      </div>

      {/* Render either Mobile Frame (or native mobile) OR Desktop View */}
      {effectiveIsMobile ? (
        <div
          className={
            !isMobileWindow
              ? 'max-w-[412px] mx-auto my-6 rounded-[32px] shadow-2xl border-[6px] border-[#322f35] overflow-hidden bg-surface'
              : 'w-full bg-surface'
          }
        >
          {activePage === 'home' ? (
            <MobileHome
              onNavigateToProduct={handleNavigateToProduct}
              onAddToCart={handleAddToCart}
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              cartCount={totalCartCount}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenWishlist={() => setIsWishlistOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              onShowToast={showToast}
            />
          ) : (
            <MobileProductDetails
              product={selectedProduct}
              onNavigateHome={handleNavigateHome}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onAddToCart={handleAddToCart}
              onInstantCheckout={(amount, summary) =>
                setCheckoutModal({ open: true, amount, summary })
              }
              wishlistIds={wishlistIds}
              onToggleWishlist={handleToggleWishlist}
              onShowToast={showToast}
            />
          )}
        </div>
      ) : activePage === 'home' ? (
        <DesktopHome
          onNavigateToProduct={handleNavigateToProduct}
          onAddToCart={handleAddToCart}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          cartCount={totalCartCount}
          wishlistCount={wishlistIds.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onShowToast={showToast}
        />
      ) : (
        <DesktopProductDetails
          product={selectedProduct}
          onNavigateHome={handleNavigateHome}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToCart={handleAddToCart}
          onInstantCheckout={(amount, summary) =>
            setCheckoutModal({ open: true, amount, summary })
          }
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          cartCount={totalCartCount}
          wishlistCount={wishlistIds.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenLightbox={(url) => setLightboxUrl(url)}
          onOpenReviewModal={() => setIsReviewModalOpen(true)}
          customReviews={customReviews}
          onShowToast={showToast}
        />
      )}

      {/* Interactive Modals, Drawers & Toasts */}
      <Overlays
        isCartOpen={isCartOpen}
        onCloseCart={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveCartItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
        onProceedToCheckout={(amount, summary) =>
          setCheckoutModal({ open: true, amount, summary })
        }
        isWishlistOpen={isWishlistOpen}
        onCloseWishlist={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        onToggleWishlist={handleToggleWishlist}
        onSelectProduct={(p) => handleNavigateToProduct(p)}
        onAddToCart={handleAddToCart}
        isSearchOpen={isSearchOpen}
        onCloseSearch={() => setIsSearchOpen(false)}
        lightboxUrl={lightboxUrl}
        onCloseLightbox={() => setLightboxUrl(null)}
        isReviewModalOpen={isReviewModalOpen}
        onCloseReviewModal={() => setIsReviewModalOpen(false)}
        onAddReview={(rev) => {
          setCustomReviews((prev) => [rev, ...prev]);
          showToast('Thank you! Your review has been published.');
        }}
        checkoutModal={checkoutModal}
        onCloseCheckoutModal={() => setCheckoutModal({ open: false, amount: 0, summary: '' })}
        onCompleteOrder={() => {
          setCheckoutModal({ open: false, amount: 0, summary: '' });
          setCartItems([]);
          showToast('Order #BC-4092 confirmed! ✨');
        }}
        toastMessage={toastMessage}
      />
    </div>
  );
}
