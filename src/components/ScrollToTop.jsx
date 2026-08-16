import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // Page बदलने पर ऊपर scroll करे
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  // 400px नीचे जाने के बाद button दिखाए
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className="
    fixed bottom-[152px] right-5
    sm:right-6
    z-[100]
    flex h-12 w-12
    items-center justify-center
    rounded-full
    border-2 border-[#C69A45]
    bg-[#07383B]
    text-[#E5C378]
    shadow-[0_4px_15px_rgba(0,0,0,0.25)]
    transition-all duration-300
    hover:-translate-y-1
    hover:scale-110
    hover:bg-[#C69A45]
    hover:text-[#07383B]
    focus:outline-none
    active:scale-95
  "
    >
      {/* Golden pulse animation */}
      <span
        className="
      pointer-events-none
      absolute -inset-1
      rounded-full
      border border-[#E5C378]/50
      animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]
    "
      />

      {/* Moving arrow animation */}
      <ChevronUp
        className="
      relative z-10
      h-5 w-5
      animate-[bounce_1.8s_ease-in-out_infinite]
    "
        strokeWidth={2.5}
      />
    </button>
  );
}