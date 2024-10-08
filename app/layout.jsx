import { Inter } from 'next/font/google';
// import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import '../assets/scss/app.scss';
import { ClerkProvider } from '@clerk/nextjs';
import { getURL } from '@/utils/helpers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const title = 'Skinny Tax';
const description = 'Brought to you by Vercel, Stripe, and Supabase.';

export const metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <ToastContainer />
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
