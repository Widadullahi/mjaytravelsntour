import React, { useEffect, useState } from "react";

function InstallAppPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [iosMode, setIosMode] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("mjay-install-dismissed") === "1";
    if (dismissed) {
      return undefined;
    }

    const ua = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

    if (isIOS && !isStandalone) {
      setIosMode(true);
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }

    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstallPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onBeforeInstallPrompt);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("mjay-install-dismissed", "1");
  };

  const install = async () => {
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside className="install-popup" role="dialog" aria-label="Install MJAY App">
      <div className="install-popup-inner">
        <span className="logo-badge crest" aria-hidden="true">
          MT
        </span>
        <div>
          <strong>Install MJAY App</strong>
          <p>
            {iosMode
              ? "On iPhone: tap Share, then Add to Home Screen."
              : "Get fast booking updates and trip alerts directly on your phone."}
          </p>
        </div>
        <div className="install-actions">
          {!iosMode && (
            <button type="button" className="install-btn primary" onClick={install}>
              Install
            </button>
          )}
          <button type="button" className="install-btn ghost" onClick={dismiss}>
            Not now
          </button>
        </div>
      </div>
    </aside>
  );
}

export default InstallAppPrompt;
