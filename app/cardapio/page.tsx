
"use client";

import { useState } from "react";

const categorias = [
  "Todos os Itens",
  "Smash Burgers",
  "Porções & Entradas",
  "Cafés & Shakes",
];

const produtos = [
  {
    nome: "Brasa Clássico",
    descricao: "Blend Angus 180g, cheddar, cebola caramelizada e molho da casa.",
    preco: "38,90",
    categoria: "Smash Burgers",
    tag: "MAIS PEDIDO",
    imagem:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Smash Crocante",
    descricao: "Dois smash burgers, queijo, picles e molho especial.",
    preco: "32,90",
    categoria: "Smash Burgers",
    tag: "FAVORITO",
    imagem:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433a?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Duplo Defumado",
    descricao: "Dois blends na brasa, cheddar, bacon e barbecue defumado.",
    preco: "42,90",
    categoria: "Smash Burgers",
    tag: "ESPECIAL",
    imagem:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  },
  {
    nome: "Fritas Rústicas",
    descricao: "Batatas douradas com ervas, páprica e molho especial da casa.",
    preco: "19,90",
    categoria: "Porções & Entradas",
    imagem:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85",
  },
  {
    nome: "Shake Espresso",
    descricao: "Sorvete cremoso, leite gelado e café espresso intenso.",
    preco: "18,90",
    categoria: "Cafés & Shakes",
    imagem:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=85",
  },
  {
    nome: "Latte Artesanal",
    descricao: "Espresso encorpado com leite vaporizado e espuma cremosa.",
    preco: "12,90",
    categoria: "Cafés & Shakes",
    imagem:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=85",
  },
  {
    nome: "Brownie na Chapa",
    descricao: "Brownie de chocolate aquecido, com casquinha crocante.",
    preco: "16,90",
    categoria: "Porções & Entradas",
    imagem:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85",
  },
];

export default function Cardapio() {
  const [categoriaAtiva, setCategoriaAtiva] =
    useState("Todos os Itens");

  const produtosFiltrados =
    categoriaAtiva === "Todos os Itens"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria === categoriaAtiva
        );

  const hamburgueres = produtosFiltrados.filter(
    (produto) => produto.categoria === "Smash Burgers"
  );

  const complementos = produtosFiltrados.filter(
    (produto) => produto.categoria !== "Smash Burgers"
  );

  return (
    <>
      <section className="menu-hero">
        <div className="container menu-hero-inner">
          <div className="menu-hero-content">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              TEMPORADA DE SABORES
            </span>

            <h1>
              O melhor do outono,
              <span> servido à mesa.</span>
            </h1>

            <p>
              Receitas artesanais, ingredientes selecionados e
              combinações que aquecem qualquer momento.
            </p>

            <a href="#produtos" className="button button-primary">
              Explorar sabores ↓
            </a>
          </div>

          <div className="menu-hero-image">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=85"
              alt="Hambúrguer artesanal especial da temporada"
            />

            <div className="combo-card">
              <span>EDIÇÃO LIMITADA</span>
              <strong>Combo do Dia</strong>
              <p>Seu burger favorito com acompanhamento.</p>
              <span className="combo-price">A partir de R$ 49,90</span>
            </div>
          </div>
        </div>
      </section>

      <section className="menu-section" id="produtos">
        <div className="container">
          <div className="section-heading menu-heading">
            <div>
              <span className="eyebrow">FEITO PARA VOCÊ</span>
              <h2>Nosso <span>cardápio.</span></h2>
              <p>Escolha seu próximo favorito.</p>
            </div>
          </div>

          <div className="category-filters" aria-label="Filtrar produtos">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                type="button"
                className={`filter-button ${
                  categoriaAtiva === categoria ? "active" : ""
                }`}
                onClick={() => setCategoriaAtiva(categoria)}
                aria-pressed={categoriaAtiva === categoria}
              >
                {categoria}
              </button>
            ))}
          </div>

          {hamburgueres.length > 0 && (
            <section className="menu-category">
              <div className="category-heading">
                <div>
                  <span className="eyebrow">NA BRASA</span>
                  <h2>Linha Smash & Brasa</h2>
                </div>
                <span className="item-count">
                  {hamburgueres.length} opções
                </span>
              </div>

              <div className="product-grid">
                {hamburgueres.map((produto) => (
                  <article className="product-card" key={produto.nome}>
                    <div className="product-image-wrap">
                      <img src={produto.imagem} alt={produto.nome} />
                      {produto.tag && (
                        <span className="product-tag">{produto.tag}</span>
                      )}
                      <span className="product-rating">★ 4.9</span>
                    </div>

                    <div className="product-info">
                      <h3>{produto.nome}</h3>
                      <p>{produto.descricao}</p>

                      <div className="product-bottom">
                        <strong>R$ {produto.preco}</strong>
                        <button
                          type="button"
                          className="add-button"
                          onClick={() =>
                            alert(`${produto.nome} selecionado!`)
                          }
                        >
                          + <span>Pedir agora</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {complementos.length > 0 && (
            <section className="menu-category">
              <div className="category-heading">
                <div>
                  <span className="eyebrow">PARA ACOMPANHAR</span>
                  <h2>Acompanhamentos & Cafeteria</h2>
                </div>
                <span className="item-count">
                  {complementos.length} opções
                </span>
              </div>

              <div className="side-dishes-grid">
                {complementos.map((produto) => (
                  <article className="side-dish-card" key={produto.nome}>
                    <img src={produto.imagem} alt={produto.nome} />

                    <div className="side-dish-info">
                      <span className="side-dish-category">
                        {produto.categoria}
                      </span>
                      <h3>{produto.nome}</h3>
                      <p>{produto.descricao}</p>

                      <div className="product-bottom">
                        <strong>R$ {produto.preco}</strong>
                        <button
                          type="button"
                          className="add-button"
                          onClick={() =>
                            alert(`${produto.nome} selecionado!`)
                          }
                          aria-label={`Selecionar ${produto.nome}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {produtosFiltrados.length === 0 && (
            <p>Nenhum produto encontrado nesta categoria.</p>
          )}
        </div>
      </section>

      <section className="menu-cta">
        <div className="container menu-cta-inner">
          <div>
            <span className="eyebrow">SUA PRÓXIMA EXPERIÊNCIA</span>
            <h2>Feito na brasa. Servido com carinho.</h2>
          </div>
          <a href="#" className="button button-primary">
            Voltar ao topo ↑
          </a>
        </div>
      </section>
    </>
  );
}
