export default function ShareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Hide the app shell (sidebar, topbar, mobile tab bar) on share pages */}
      <style>{`
        [data-slot="sidebar"],
        [data-slot="topbar"],
        [data-slot="mobile-tab-bar"] {
          display: none !important;
        }
        [data-slot="app-shell"] {
          display: block !important;
        }
        [data-slot="app-shell"] > div {
          display: block !important;
        }
        [data-slot="app-main"] {
          padding: 0 !important;
        }
      `}</style>
      {children}
    </>
  );
}
