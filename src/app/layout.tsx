import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jaiyand P A | Full-Stack Developer & Data Analytics Specialist',
  description: 'Portfolio of Jaiyand P A, Computer Science Graduate specializing in MERN stack web development, REST APIs, and Data Analytics (Python, SQL, Power BI). Explore projects, experience, and skills.',
  keywords: [
    'Jaiyand P A',
    'Full-Stack Developer',
    'MERN Stack Developer',
    'Data Analytics',
    'Computer Science Graduate',
    'React.js',
    'Node.js',
    'Python',
    'SQL',
    'Power BI',
    'SRM TRP Engineering College'
  ],
  authors: [{ name: 'Jaiyand P A' }],
  creator: 'Jaiyand P A',
  openGraph: {
    title: 'Jaiyand P A | Full-Stack Developer & Data Analytics Specialist',
    description: 'Computer Science Graduate | MERN Stack Developer | Data Analytics Intern. View portfolio projects, technical experience, and resume.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jaiyand P A Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaiyand P A | Full-Stack Developer & Data Analytics',
    description: 'Entry-level Full-Stack Developer & Data Analytics Specialist. View portfolio projects and technical qualifications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jaiyand P A',
              jobTitle: 'Full-Stack Developer & Data Analytics Specialist',
              alumniOf: {
                '@type': 'EducationalOrganization',
                name: 'SRM TRP Engineering College',
              },
              knowsAbout: [
                'HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js',
                'Express.js', 'MongoDB', 'SQL', 'Python', 'Pandas',
                'NumPy', 'Matplotlib', 'Power BI'
              ],
              sameAs: [
                'https://linkedin.com/in/jaiyand-p-a'
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-dark-bg text-slate-100 antialiased min-h-screen selection:bg-brand-teal selection:text-dark-bg`}
      >
        {children}
      </body>
    </html>
  );
}
