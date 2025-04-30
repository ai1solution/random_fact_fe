import React, { useEffect  } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;
    useEffect(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
      catch (e) {
        console.log(e)
      }
    },[]);
    return (
      <>
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          // data-ad-client="ca-pub-3640737521870113"
          data-ad-client="ca-pub-0000000000000000"
          data-ad-slot={dataAdSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="on"
        >
        </ins>
      </>
    );
};

export default AdsComponent;