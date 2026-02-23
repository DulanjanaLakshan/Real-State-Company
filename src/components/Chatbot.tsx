import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello, I'm ATLAS. How can I assist with your investment inquiries today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your inquiry. Our investment team specializes in global commercial real estate. Would you like to schedule a consultation or view our latest market report?", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,209,0,0.3)] hover:scale-110 transition-transform overflow-hidden group"
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFD100] to-[#B87333] opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <Bot size={28} className="text-[#0A1928] relative z-10" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-[#050C14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-[#0A1928] p-4 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFD100]/20 rounded-full flex items-center justify-center">
                  <Bot size={18} className="text-[#FFD100]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">ATLAS AI</h3>
                  <p className="text-green-400 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.isBot 
                        ? 'bg-[#0A1928] text-gray-300 rounded-tl-none border border-white/5' 
                        : 'bg-[#FFD100] text-[#0A1928] rounded-tr-none font-medium'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-[#0A1928] border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about investments..."
                  className="w-full bg-[#050C14] border border-white/10 rounded-full py-3 pl-4 pr-12 text-white text-sm focus:outline-none focus:border-[#FFD100] transition-colors"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-[#FFD100] rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <Send size={14} className="text-[#0A1928]" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
