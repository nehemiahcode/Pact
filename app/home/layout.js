export const metadata = {
    title: 'Packt | Home',
    description: 'Welcome to packt',
  }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
