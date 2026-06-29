import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { MessageSquare, X, Send, Shield, Loader } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hello! I am RSDS Bot, your virtual NDT Specialist. How can I assist you today with our inspection services, ASME/ASNT certifications, or Level I/II training courses?"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    
    // Add user message to state
    const updatedMessages = [...messages, { role: 'user', text: userText } as ChatMessage];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages: updatedMessages })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to get reply");
      }
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev, 
        { 
          role: 'model', 
          text: "I apologize, but I am experiencing trouble reaching our expert servers. Please call our Mississippi office directly at (409) 272-0514 or email samuelverrett80@gmail.com for prompt assistance!" 
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div id="ai-chatbot-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div id="chat-window" className="w-[330px] sm:w-[380px] h-[480px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col mb-4 overflow-hidden animate-fade-in">
          {/* Chat Header */}
          <div className="bg-primary-navy p-4 text-white flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-orange-accent rounded-lg flex items-center justify-center text-white font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-display">RSDS NDT Expert Assistant</h4>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-300">Online & Safety-Certified</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat History Messages */}
          <div id="chat-history" className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gray-50/50">
            {messages.map((m, index) => (
              <div 
                key={index} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs shadow-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-orange-accent text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {loading && (
              <div className="flex justify-start items-center gap-2 animate-pulse">
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-3.5 py-3 shadow-sm flex items-center gap-1.5">
                  <Loader className="w-3.5 h-3.5 text-orange-accent animate-spin" />
                  <span className="text-[10px] text-gray-500 font-medium">Assistant is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              id="chat-user-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about training, UT scans, CWI, pricing..."
              className="flex-1 px-3.5 py-2 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-accent transition-all bg-gray-50/20"
              disabled={loading}
            />
            <button
              id="chat-send-btn"
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="p-2.5 bg-orange-accent hover:bg-orange-hover text-white rounded-xl shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Send Message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        id="chat-launcher"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-orange-accent hover:bg-orange-hover text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-orange-accent/20 cursor-pointer transition-transform hover:scale-105 active:scale-95 duration-200"
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
