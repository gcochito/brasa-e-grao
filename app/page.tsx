
import Link from "next/link";

const produtos = [
  {
    nome: "Brasa Clássico",
    descricao:
      "Blend Angus 180g, queijo cheddar, cebola caramelizada e molho da casa.",
    preco: "38,90",
    avaliacao: "4.9",
    tag: "MAIS PEDIDO",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Smash Crocante",
    descricao:
      "Dois smash burgers, queijo derretido, picles artesanal e molho especial.",
    preco: "32,90",
    avaliacao: "4.8",
    tag: "FAVORITO",
    imagem:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Duplo Defumado",
    descricao:
      "Dois blends na brasa, cheddar, bacon crocante e barbecue defumado.",
    preco: "42,90",
    avaliacao: "5.0",
    tag: "ESPECIAL DA CASA",
    imagem:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  },
];

const diferenciais = [
  {
    icone: "🔥",
    titulo: "Blend 100% Angus",
    descricao:
      "Carne selecionada, preparada para garantir sabor e suculência.",
  },
  {
    icone: "☕",
    titulo: "Torrefação Própria",
    descricao:
      "Cafés especiais com aroma marcante e sabor inesquecível.",
  },
  {
    icone: "🚀",
    titulo: "Entrega Quente",
    descricao:
      "Cuidado no preparo e na embalagem para chegar quentinho.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              FEITO NA BRASA, FEITO COM PAIXÃO
            </span>

            <h1>
              Sabor defumado na brasa,
              <span> crosta perfeita</span> a cada mordida.
            </h1>

            <p className="hero-description">
              Ingredientes selecionados, carne suculenta e café
              especial. Uma experiência artesanal feita para
              quem não abre mão de sabor.
            </p>

            <div className="hero-buttons">
              <Link href="/cardapio" className="button button-primary">
                Explorar Cardápio <span>↗</span>
              </Link>

              <a href="#mais-pedidos" className="button button-outline">
                Conheça nossos sabores
              </a>
            </div>

            <div className="hero-rating">
              <div className="avatar-stack">
                <span>G</span>
                <span>M</span>
                <span>A</span>
              </div>
              <div>
                <strong>4.9/5 <span className="stars">★★★★★</span></strong>
                <small>Mais de 500 avaliações de clientes</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90"
                alt="Hambúrguer artesanal com queijo, alface e tomate"
                className="hero-image"
              />
            </div>

            <div className="price-card">
              <span className="price-label">O QUERIDINHO DA CASA</span>
              <strong>Brasa Clássico</strong>
              <span className="price-value">R$ 38,90</span>
              <Link href="/cardapio">Ver no cardápio ↗</Link>
            </div>

            <div className="hero-stamp">
              <span>100%</span>
              <small>ARTESANAL</small>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container benefits-grid">
          {diferenciais.map((item) => (
            <article className="benefit-card" key={item.titulo}>
              <div className="benefit-icon">{item.icone}</div>
              <div>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section products-section" id="mais-pedidos">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ESCOLHAS DA CASA</span>
              <h2>
                Os mais pedidos <span>da semana.</span>
              </h2>
              <p>
                Receitas que conquistam na primeira mordida.
              </p>
            </div>

            <Link href="/cardapio" className="text-link">
              Ver cardápio completo ↗
            </Link>
          </div>

          <div className="product-grid">
            {produtos.map((produto) => (
              <article className="product-card" key={produto.nome}>
                <div className="product-image-wrap">
                  <img src={produto.imagem} alt={produto.nome} />
                  <span className="product-tag">{produto.tag}</span>
                  <span className="product-rating">
                    ★ {produto.avaliacao}
                  </span>
                </div>

                <div className="product-info">
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>

                  <div className="product-bottom">
                    <strong>R$ {produto.preco}</strong>
                    <Link
                      href="/cardapio"
                      className="add-button"
                      aria-label={`Ver ${produto.nome} no cardápio`}
                    >
                      + <span>Pedir agora</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="coffee-banner">
        <div className="container coffee-banner-inner">
          <div>
            <span className="eyebrow">UMA PAUSA COM MAIS SABOR</span>
            <h2>
              Seu café favorito,
              <span> do nosso jeito.</span>
            </h2>
            <p>
              Cafés especiais, shakes cremosos e doces preparados
              para deixar o seu dia melhor.
            </p>
            <Link href="/cardapio" className="button button-primary">
              Descobrir cafeteria ↗
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85"
            alt="Xícara de café artesanal"
          />
        </div>
      </section>
    </>
  );
}
