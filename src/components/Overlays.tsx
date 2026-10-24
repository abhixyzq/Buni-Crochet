import React, { useState } from 'react';
import { PRODUCTS, ProductItem } from '../data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  variant?: string;
  qty: number;
}

interface OverlaysProps {
  // Cart Drawer
  isCartOpen: boolean;
  onCloseCart: () => void;
  cartItems: CartItem[];
  onUpdateCartQty: (id: string, delta: number) => void;
  onRemoveCartItem: (id: string) => void;
  onClearCart: () => void;
  onProceedToCheckout: (total: number, summary: string) => void;

  // Wishlist Drawer
  isWishlistOpen: boolean;
  onCloseWishlist: () => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string, name: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onAddToCart: (item: {
    id: string;
    name: string;
    price: number;
    image: string;
    variant?: string;
    qty?: number;
  }) => void;

  // Search Modal
  isSearchOpen: boolean;
  onCloseSearch: () => void;

  // Lightbox
  lightboxUrl: string | null;
  onCloseLightbox: () => void;

  // Review Modal
  isReviewModalOpen: boolean;
  onCloseReviewModal: () => void;
  onAddReview: (review: {
    name: string;
    city: string;
    title: string;
    body: string;
    date: string;
  }) => void;

  // Instant UPI Checkout Modal
  checkoutModal: { open: boolean; amount: number; summary: string };
  onCloseCheckoutModal: () => void;
  onCompleteOrder: () => void;

  // Toast
  toastMessage: string | null;
}

export const Overlays: React.FC<OverlaysProps> = ({
  isCartOpen,
  onCloseCart,
  cartItems,
  onUpdateCartQty,
  onRemoveCartItem,
  onProceedToCheckout,
  isWishlistOpen,
  onCloseWishlist,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  onAddToCart,
  isSearchOpen,
  onCloseSearch,
  lightboxUrl,
  onCloseLightbox,
  isReviewModalOpen,
  onCloseReviewModal,
  onAddReview,
  checkoutModal,
  onCloseCheckoutModal,
  onCompleteOrder,
  toastMessage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reviewName, setReviewName] = useState('');
  const [reviewCity, setReviewCity] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [upiId, setUpiId] = useState('ananya@okicici');
  const [orderSuccess, setOrderSuccess] = useState(false);

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const filteredProducts = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const wishlistedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <>
      {/* TOAST ALERT */}
      <div
        className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-xs font-medium transition-all duration-300 ${
          toastMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <span className="material-symbols-outlined text-base text-tertiary-fixed material-fill">
          check_circle
        </span>
        <span>{toastMessage}</span>
      </div>

      {/* CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-inverse-surface/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-surface h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-surface-container-highest">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">shopping_bag</span>
                  <h3 className="text-lg font-headline font-bold text-on-surface">
                    Your Artisan Bag ({cartItems.reduce((s, i) => s + i.qty, 0)})
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={onCloseCart}
                  className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>

              {cartSubtotal >= 999 ? (
                <div className="mt-4 p-3 rounded-xl bg-tertiary-fixed/60 text-on-tertiary-fixed text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">local_shipping</span>
                  <span>Yay! You unlocked Free Pan-India Express Shipping.</span>
                </div>
              ) : (
                <div className="mt-4 p-3 rounded-xl bg-surface-container text-on-surface-variant text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-base text-primary">
                    local_shipping
                  </span>
                  <span>
                    Add ₹{(999 - cartSubtotal).toLocaleString('en-IN')} more for Free Express
                    Shipping!
                  </span>
                </div>
              )}

              <div className="mt-6 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <span className="material-symbols-outlined text-4xl text-outline">
                      shopping_bag
                    </span>
                    <p className="text-sm font-semibold text-on-surface">Your bag is empty</p>
                    <p className="text-xs text-on-surface-variant">
                      Explore our handcrafted bouquets and keepsakes to fill it with warmth.
                    </p>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3.5 p-3 rounded-xl bg-surface-container-lowest shadow-xs"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg object-cover bg-surface-container shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-on-surface truncate">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => onRemoveCartItem(item.id)}
                              className="text-outline hover:text-error cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-sm">delete</span>
                            </button>
                          </div>
                          {item.variant && (
                            <p className="text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">
                              {item.variant}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-bold text-primary">
                            ₹{(item.price * item.qty).toLocaleString('en-IN')}
                          </span>
                          <div className="flex items-center gap-2 bg-surface-container rounded-lg px-1.5 py-0.5">
                            <button
                              type="button"
                              onClick={() => onUpdateCartQty(item.id, -1)}
                              className="w-5 h-5 flex items-center justify-center text-on-surface cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-xs">remove</span>
                            </button>
                            <span className="text-xs font-bold font-mono">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => onUpdateCartQty(item.id, 1)}
                              className="w-5 h-5 flex items-center justify-center text-on-surface cursor-pointer"
                            >
                              <span className="material-symbols-outlined text-xs">add</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-surface-container-highest space-y-3">
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Shipping</span>
                  <span className="font-semibold text-tertiary">
                    {cartSubtotal >= 999 ? 'FREE' : '₹79'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-on-surface">
                  <span>Total (Incl. GST)</span>
                  <span>
                    ₹
                    {(cartSubtotal + (cartSubtotal >= 999 ? 0 : 79)).toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onCloseCart();
                    onProceedToCheckout(
                      cartSubtotal + (cartSubtotal >= 999 ? 0 : 79),
                      `${cartItems.reduce((s, i) => s + i.qty, 0)} Handcrafted Items`
                    );
                  }}
                  className="w-full py-3.5 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base material-fill">bolt</span>
                  <span>Proceed to Instant UPI Checkout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WISHLIST DRAWER */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-inverse-surface/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-surface h-full shadow-2xl flex flex-col p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-surface-container-highest">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-error material-fill">favorite</span>
                <h3 className="text-lg font-headline font-bold text-on-surface">
                  Saved Keepsakes ({wishlistedProducts.length})
                </h3>
              </div>
              <button
                type="button"
                onClick={onCloseWishlist}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="mt-6 space-y-4 flex-1">
              {wishlistedProducts.length === 0 ? (
                <div className="text-center py-12 space-y-2">
                  <span className="material-symbols-outlined text-4xl text-outline">favorite</span>
                  <p className="text-sm font-semibold text-on-surface">No saved treasures yet</p>
                  <p className="text-xs text-on-surface-variant">
                    Tap the heart icon on any crochet creation to save it for later.
                  </p>
                </div>
              ) : (
                wishlistedProducts.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3.5 p-3 rounded-xl bg-surface-container-lowest shadow-xs items-center"
                  >
                    <img
                      src={item.desktopImage}
                      alt={item.name}
                      onClick={() => {
                        onSelectProduct(item);
                        onCloseWishlist();
                      }}
                      className="w-18 h-18 rounded-lg object-cover cursor-pointer shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h4
                        onClick={() => {
                          onSelectProduct(item);
                          onCloseWishlist();
                        }}
                        className="text-xs font-bold text-on-surface truncate cursor-pointer hover:text-primary"
                      >
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-on-surface-variant">{item.subtitle}</p>
                      <p className="text-xs font-bold text-primary mt-1">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          onAddToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.desktopImage,
                          });
                        }}
                        className="px-3 py-1.5 rounded-lg bg-primary text-on-primary text-[11px] font-semibold cursor-pointer"
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={() => onToggleWishlist(item.id, item.name)}
                        className="text-[10px] text-outline hover:text-error cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-inverse-surface/40 backdrop-blur-xs">
          <div className="w-full max-w-xl bg-surface rounded-2xl shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center gap-3 pb-4 border-b border-surface-container-highest">
              <span className="material-symbols-outlined text-primary">search</span>
              <input
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search bouquets, tulips, heart charms, totes..."
                className="w-full bg-transparent text-sm text-on-surface placeholder-on-surface-variant focus:outline-none"
                type="text"
              />
              <button
                type="button"
                onClick={onCloseSearch}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <div className="mt-4 max-h-80 overflow-y-auto space-y-2">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProduct(p);
                    onCloseSearch();
                  }}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.desktopImage}
                      alt={p.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-xs font-bold text-on-surface">{p.name}</p>
                      <p className="text-[11px] text-on-surface-variant">{p.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-primary">
                    ₹{p.price.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX IMAGE VIEWER */}
      {lightboxUrl && (
        <div
          onClick={onCloseLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-inverse-surface/85 backdrop-blur-md cursor-zoom-out"
        >
          <div className="relative max-w-3xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={lightboxUrl}
              alt="Expanded artisan craft view"
              className="w-full h-full object-contain max-h-[85vh]"
              referrerPolicy="no-referrer"
            />
            <button
              type="button"
              onClick={onCloseLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/90 text-on-surface flex items-center justify-center shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      )}

      {/* WRITE A REVIEW MODAL */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/40 backdrop-blur-xs">
          <div className="w-full max-w-md bg-surface rounded-2xl shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-headline font-bold text-on-surface">
                Share Your Buni Story
              </h3>
              <button
                type="button"
                onClick={onCloseReviewModal}
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onAddReview({
                  name: reviewName || 'Meera Nair',
                  city: reviewCity || 'Bengaluru, KA',
                  title: reviewTitle || 'So delicate and everlasting!',
                  body:
                    reviewBody ||
                    'Every petal is stitched with such care. Looks lovely on my bookshelf!',
                  date: 'Just now',
                });
                setReviewName('');
                setReviewCity('');
                setReviewTitle('');
                setReviewBody('');
                onCloseReviewModal();
              }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  value={reviewName}
                  onChange={(e) => setReviewName(e.target.value)}
                  placeholder="Your Name"
                  className="px-3 py-2 text-xs rounded-lg bg-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <input
                  required
                  value={reviewCity}
                  onChange={(e) => setReviewCity(e.target.value)}
                  placeholder="City (e.g. Mumbai, MH)"
                  className="px-3 py-2 text-xs rounded-lg bg-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <input
                required
                value={reviewTitle}
                onChange={(e) => setReviewTitle(e.target.value)}
                placeholder="Review Headline (e.g. Best anniversary gift!)"
                className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <textarea
                required
                rows={3}
                value={reviewBody}
                onChange={(e) => setReviewBody(e.target.value)}
                placeholder="Tell us about your handcrafted piece..."
                className="w-full px-3 py-2 text-xs rounded-lg bg-surface-container text-on-surface focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider shadow-md cursor-pointer"
              >
                Publish Verified Review
              </button>
            </form>
          </div>
        </div>
      )}

      {/* INSTANT UPI CHECKOUT MODAL */}
      {checkoutModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-inverse-surface/50 backdrop-blur-xs">
          <div className="w-full max-w-md bg-surface rounded-2xl shadow-2xl p-6 space-y-5">
            {orderSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-tertiary-fixed text-on-tertiary-fixed mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl material-fill">
                    verified
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Order #BC-4092 Confirmed!
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Our Kolhapur artisan cluster has received your order for{' '}
                  <strong>{checkoutModal.summary}</strong>. Your parcel will be hand-wrapped and
                  dispatched within 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setOrderSuccess(false);
                    onCompleteOrder();
                  }}
                  className="w-full py-3 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Continue Exploring Buni Crochet
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between border-b border-surface-container-highest pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">
                      Buni Crochet • Razorpay Express
                    </span>
                    <h3 className="text-lg font-headline font-bold text-on-surface">
                      Instant UPI / QR Checkout
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={onCloseCheckoutModal}
                    className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">close</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-on-surface">
                      {checkoutModal.summary}
                    </p>
                    <p className="text-[11px] text-on-surface-variant">
                      Includes GST &amp; Insured Pan-India Courier
                    </p>
                  </div>
                  <span className="text-lg font-bold font-headline text-primary">
                    ₹{checkoutModal.amount.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-on-surface block">
                    Enter UPI ID (GPay / PhonePe / Paytm)
                  </label>
                  <input
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-surface-container text-on-surface font-mono focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="yourname@upi"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setOrderSuccess(true)}
                  className="w-full py-3.5 rounded-xl bg-tertiary text-on-tertiary text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base material-fill">bolt</span>
                  <span>Pay ₹{checkoutModal.amount.toLocaleString('en-IN')} Instantly</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
