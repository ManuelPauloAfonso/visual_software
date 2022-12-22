import React, { ReactNode } from "react"

export type PropsChildren = {
  children: ReactNode;
}

export type ProductsPropsState = {
  products: ProductsProps;
  setProducts: React.Dispatch<React.SetStateAction<ProductsProps>>;
  getProducts: () => Promise<void>

}

export type ProductsProps = {

  existePaginaAnterior: boolean,
  existePaginaPosterior: boolean,
  paginaAtual: number,
  totalPaginas: number,
  totalRegistros: number,
  count: number,

  data: [
    id: string,
    ativo: boolean,
    promocaoVigente: boolean,
    produtoVariacao: boolean,
    sku: number,
    descricao: string,
    url: string,
    estoqueTotal: number,
    precoUnitario: number,
    informacoesProduto: string,
    video: string,
    gtinEan: string,
    statusCadastro: number,
    tipoProduto: number,
    produtoPaiId: string,
    especificacoes: [],
    variacoesFilhos: [],
    variacoes: [],
    imagens: [],
    imagemPadrao: {},
    embalagens: [],

    categoria: {
      id: string,
      nome: string,
      emDestaque: string,
      ordem: 0,
      ativo: boolean,
      codigoExterno: number,
      url: string,
      alias: string
    },
    marca: {
      id: string,
      nome: string,
      ativo: boolean,
      codigoExterno: string,
      url: string
    },
    modelo: {
      id: string,
      nome: string,
      ativo: boolean,
      codigoExterno: 83
    },
    perfilFiscal: {
      id: string,
      codigoExterno: string,
      descricao: string,
      regime: number,
      coi: number,
      coiDescricao: string,
      situacao: number,
      detalhes: []
    },
    unidadeMedida: {
      id: string,
      descricao: string,
      prefixo: string,
      codigoExterno: string
    },
    precoPromocional: number,
    dataCadastroExterno: string,
    impostos: []
  ]

}