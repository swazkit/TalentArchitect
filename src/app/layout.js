import './globals.css'

export const metadata = {
  title: 'HR Consultancy - Empowering Your Workforce',
  description: 'Leading HR Consultancy Services Tailored for Modern Businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}