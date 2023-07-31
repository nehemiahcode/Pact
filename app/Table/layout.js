export const metadata = {
    title: 'Pact | Table',
    description: 'Welcome to pact where you can get in touch with Web developers for your bussiness',
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  );
}
