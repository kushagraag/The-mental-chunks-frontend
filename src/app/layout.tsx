export const metadata = {
  title: "The Mental Chunks",
  description: "A website for mentals",
  name: "viewport",
  content: "width=device-width, initial-scale=0.8",
  charSet: "UTF-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
