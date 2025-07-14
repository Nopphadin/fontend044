import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navigation from "./conponents/Navigation";
import { Prompt } from 'next/font/google';

const prompt = Prompt({
  subsets: ['thai', 'latin'], // รองรับภาษาไทย
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});


export const metadata = {
  title: 'เว็บไซต์ของคุณ',
  description: 'เว็บไซต์ที่ใช้ฟอนต์ Prompt',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={prompt.className}
      ><Navigation/>
        {children}
      </body>
    </html>
  );
}