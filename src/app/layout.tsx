import '@/styles/global.css';

export const metadata = {
  title: 'Tweeter - A Twitter clone',
  description: 'A Twitter clone built with Next.js'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
