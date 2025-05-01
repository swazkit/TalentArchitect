import './globals.css'

export const metadata = {
  title: 'Talent Architect',
  description: 'Leading HR Consultancy Services',
  icons: [
    { rel: 'icon', url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/favicon.png' },
  ],
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}