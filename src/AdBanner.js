import { useEffect } from "react";

function AdBanner() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div style={{ margin: "20px 0" }}>
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-3640737521870113"
        data-ad-slot="5071120975"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}

export default AdBanner;
