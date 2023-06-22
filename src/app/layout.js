import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export const metadata = {
  title: 'App Masters',
  description: 'Exame para Vaga de Estágio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
        />
      </body>
    </html>
  );
}