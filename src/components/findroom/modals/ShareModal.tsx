import React from 'react';
import { X, Mail, Facebook, Instagram, Twitter, MessageSquare, Copy, Share2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, shareUrl }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialOptions = [
    { icon: <Mail size={20} />, label: 'Send mail', color: 'bg-gray-100 text-gray-600' },
    { icon: <Facebook size={20} fill="currentColor" />, label: 'Facebook', color: 'bg-blue-50 text-blue-600' },
    { icon: <Instagram size={20} />, label: 'Instagram', color: 'bg-pink-50 text-pink-600' },
    { icon: <Twitter size={20} fill="currentColor" />, label: 'X (Twitter)', color: 'bg-gray-100 text-black' },
    { icon: <MessageSquare size={20} />, label: 'Message', color: 'bg-purple-50 text-purple-600' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md">
        
        {/* Close Button (Floating on the right as per image) */}
        <button 
          onClick={onClose}
          className="absolute -right-2 -top-12 md:-right-12 md:top-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Modal Card */}
        <div className="bg-white rounded-3xl p-6 shadow-2xl animate-in zoom-in duration-300">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400">
              <Share2 size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Share</h2>
              <p className="text-xs text-gray-500">Share details to friends and families</p>
            </div>
          </div>

          {/* Social Icons Grid */}
          <div className="flex gap-4  pb-4 mb-8 scrollbar-hide">
            {socialOptions.map((option, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 min-w-[70px]">
                <button className={`${option.color} w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity`}>
                  {option.icon}
                </button>
                <span className="text-[10px] text-gray-500 font-medium text-center">{option.label}</span>
              </div>
            ))}
          </div>

          {/* Link Input Section */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-500 ml-1">Link</label>
            <div className="flex items-center bg-gray-50 border border-gray-100 rounded-xl p-1 pl-4">
              <input 
                type="text" 
                readOnly 
                value={shareUrl} 
                className="bg-transparent text-xs text-gray-600 w-full outline-none"
              />
              <button 
                onClick={copyToClipboard}
                className="bg-white p-2.5 rounded-lg shadow-sm hover:bg-gray-100 transition-all active:scale-95"
              >
                {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;