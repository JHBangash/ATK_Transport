import { useEffect } from 'react';

interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
}

export default function useSeo({ title, description, keywords }: SeoConfig) {
  useEffect(() => {
    document.title = title;

    const setOrUpdate = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        if (property) el.setAttribute('property', name);
        else el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setOrUpdate('description', description);
    setOrUpdate('keywords', keywords);
    setOrUpdate('og:title', title, true);
    setOrUpdate('og:description', description, true);
  }, [title, description, keywords]);
}