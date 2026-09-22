import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiX, FiCheckCircle } from "react-icons/fi";
import { ORDER_EMAIL } from "../utils/constants";

const Checkout = () => {
  const { cart, isCheckoutOpen, setIsCheckoutOpen, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: ""
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format Email Content
    const subject = `New Order from ${formData.name}`;
    let body = `NEW ORDER FROM WEBSITE\n\n`;
    body += `Customer Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${formData.address}, ${formData.city}\n\n`;
    body += `Order Summary:\n`;
    cart.forEach((item) => {
      body += `- ${item.quantity}x ${item.name} @ KES ${item.price} (Sub: KES ${item.quantity * item.price})\n`;
    });
    body += `\nTotal: KES ${cartTotal}`;

    // Open Default Email App
    const mailtoUrl = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    
    setOrderPlaced(true);
    clearCart();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[1005] flex items-center justify-center p-4">
      <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row">
        
        <button 
          onClick={() => setIsCheckoutOpen(false)} 
          className="absolute top-4 right-4 text-gray hover:text-white transition-colors z-10 bg-black/50 p-2 rounded-full md:bg-transparent"
        >
          <FiX size={24} />
        </button>

        {orderPlaced ? (
          <div className="w-full p-12 flex flex-col items-center justify-center text-center space-y-6">
            <FiCheckCircle size={64} className="text-gold" />
            <h2 className="text-3xl font-heading text-white">Order Initialized!</h2>
            <p className="text-gray text-lg max-w-md">
              We've prepared your order details in an email. Please send the email to complete your order.
            </p>
            <button 
              onClick={() => {
                setOrderPlaced(false);
                setIsCheckoutOpen(false);
              }}
              className="mt-4 px-8 py-3 border border-gold text-gold rounded-lg hover:bg-gold hover:text-black transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Form Section */}
            <div className="w-full md:w-3/5 p-8 order-2 md:order-1">
              <h2 className="text-2xl font-heading text-white mb-6">Delivery Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray mb-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray mb-1">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray mb-1">Street Address / Estate</label>
                  <input 
                    required 
                    type="text" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray mb-1">City / Town</label>
                  <input 
                    required 
                    type="text" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange}
                    className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" 
                  />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full py-4 bg-gold text-black font-bold uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-white"
                  >
                    Place Order via Email
                  </button>
                  <p className="text-xs text-gray text-center mt-4">
                    Payment will be collected upon delivery.
                  </p>
                </div>
              </form>
            </div>

            {/* Order Summary Section */}
            <div className="w-full md:w-2/5 bg-[#1a1a1a] p-8 order-1 md:order-2 border-b md:border-b-0 md:border-l border-white/10">
              <h3 className="text-lg font-heading text-gold mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 max-h-[30vh] md:max-h-[50vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start text-sm">
                    <div className="flex items-center gap-3">
                      <span className="text-gray bg-black/50 w-6 h-6 rounded flex items-center justify-center text-xs">{item.quantity}</span>
                      <span className="text-white max-w-[120px] md:max-w-auto leading-tight">{item.name}</span>
                    </div>
                    <span className="text-white whitespace-nowrap">KES {item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>KES {cartTotal}</span>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Checkout;
