import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export default function AdSlot({ type = 'rectangle', label = 'Advertisement' }) {
  const slot = siteConfig.adsenseSlots[type] || '';
  const enabled = Boolean(siteConfig.adsenseClientId && slot);

  useEffect(() => {
    if (!enabled) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense can initialize after this component renders.
    }
  }, [enabled]);

  if (!enabled) {
    return (
      <aside className={`ad-slot ad-slot--${type}`} aria-label={`${label} placeholder`}>
        <span className="ad-slot__label">{label}</span>
        <div className="ad-slot__preview" aria-hidden="true"><i></i><i></i><i></i></div>
        <small>Reserved ad space</small>
      </aside>
    );
  }

  return (
    <aside className={`ad-slot ad-slot--${type}`} aria-label={label}>
      <span className="ad-slot__label">{label}</span>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={siteConfig.adsenseClientId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
