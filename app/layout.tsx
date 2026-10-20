
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brasa & Grão | Hamburgueria e Cafeteria",
  description:
    "Hambúrgueres artesanais, cafés especiais e sabores preparados com paixão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-wrapper">
          <header className="site-header">
            <div className="container header-inner">
              <Link href="/" className="brand-logo">
                <span className="brand-icon">B&G</span>
                <span className="brand-name">
                  Brasa <span>&</span> Grão
                  <small>HAMBURGUERIA ARTESANAL</small>
                </span>
              </Link>

              <nav className="site-nav">
                <Link href="/" className="nav-link">
                  Início
                </Link>
                <Link href="/cardapio" className="nav-link">
                  Cardápio Completo
                </Link>
              </nav>

              <div className="header-actions">
                <span className="status-badge">
                  <span className="status-dot" />
                  Aberto · 25–35 min
                </span>

                <a href="#contato" className="button button-dark header-button">
                  Painel Gestor
                </a>
              </div>
            </div>
          </header>

          <main className="site-main">{children}</main>

          <footer className="site-footer" id="contato">
            <div className="container footer-grid">
              <div className="footer-brand">
                <Link href="/" className="brand-logo footer-logo">
                  <span className="brand-icon">B&G</span>
                  <span className="brand-name">
                    Brasa <span>&</span> Grão
                    <small>HAMBURGUERIA ARTESANAL</small>
                  </span>
                </Link>

                <p>
                  Sabor de verdade, ingredientes selecionados
                  e momentos que merecem ser compartilhados.
                </p>
              </div>

              <div className="footer-column">
                <h3>Links rápidos</h3>
                <Link href="/">Início</Link>
                <Link href="/cardapio">Nosso cardápio</Link>
              </div>

              <div className="footer-column">
                <h3>Onde estamos</h3>
                <p>Rua das Brasas, 123</p>
                <p>Centro · Sua cidade</p>
              </div>

              <div className="footer-column">
                <h3>Funcionamento</h3>
                <p>Terça a domingo</p>
                <p>18h às 23h30</p>
              </div>
            </div>

            <div className="container footer-bottom">
              <p>
                © 2026 Brasa & Grão Artesanal. Todos os direitos reservados.
              </p>
              <p>Feito com paixão e café.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}