import './globals.css'; import { site } from '../content/site';
export const metadata = { title: site.name, description: site.tagline };
export default function RootLayout({ children }) { return (<html lang="fr"><body>{children}</body></html>); }