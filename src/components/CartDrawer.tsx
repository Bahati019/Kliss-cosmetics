import { useCart } from "../context/CartContext";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, setIsCheckoutOpen, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1002]"
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`fixed top-0 right-0 h-full w-[400px] max-w-[100vw] bg-[#111] z-[1003] shadow-2xl border-l border-white/10 flex flex-col transition-transform duration-300 transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-heading text-gold tracking-wider">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray hover:text-white transition-colors">
            <FiX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray space-y-4">
              <p>Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-gold hover:text-white transition-colors underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 items-center bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="w-20 h-20 bg-[#1a1a1a] rounded-lg overflow-hidden flex-shrink-0">
                    {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium truncate">{item.name}</h3>
                    <p className="text-gold text-sm font-semibold mt-1">KES {item.price}</p>
                    
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-2 bg-[#222] rounded-lg px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray hover:text-white transition-colors"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray hover:text-white transition-colors"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 ml-auto p-1"
                      >
                        <FiTrash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray">Subtotal</span>
              <span className="text-xl font-bold text-white">KES {cartTotal}</span>
            </div>
            <p className="text-xs text-gray mb-6">Shipping and taxes calculated at checkout.</p>
            
            <button 
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-4 bg-gold text-black font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Proceed to Checkout
            </button>
          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;
