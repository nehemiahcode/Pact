export const metadata = {
  title: "Pact | Table",
  description:
    "Welcome to pact where you can get in touch with Web developers for your bussiness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      </head> */}
      <body>{children}</body>
    </html>
  );
}
