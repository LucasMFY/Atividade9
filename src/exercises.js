function m01FizzBuzz(numero) {

  let retorno;

  if(numero%5==0 && numero%3==0){retorno="fizzbuzz";}
  else if(numero%5==0){retorno="fizz";}
  else if(numero%3==0){retorno="buzz";}
  else{retorno = numero;}

  return retorno;

}

function m02Fatorial(numero) {
  let resultado = 1;
  for(let i=1; i<=numero; i++){
    resultado*=i;
  }
  return resultado;
}

function m03EhPrimo(numero) {
  let retorno = true;
  for(let i=2; i<numero; i++){
    if(numero%i==0){
      retorno = false;
      break;
    }
  }
  return retorno;
}

function m04OrdenarNumeros(lista) {
  const copia = [...lista];
  for(let i=0; i<copia.length-1; i++){
    for(let j=i; j<copia.length; j++){
      if(copia[i]>copia[j]){
        let temp = copia[j];
        copia[j] = copia[i];
        copia[i] = temp;
      }
    }  
  }
  return copia;
}

function m05AgruparPorParidade(lista) {
  let pares = [];
  let impares = [];

  for(let i=0; i<lista.length; i++){
    if(lista[i]%2==0){pares.push(lista[i]);}
    else{impares.push(lista[i]);}
  }

  return {
    pares: pares,
    impares: impares
  }
}

function m06ContarOcorrencias(lista, valor) {
  const contagem = {};

  for (let item of lista) {
    if (contagem[item]) {
      contagem[item]++;
    } else {
      contagem[item] = 1;
    }
  }

  return contagem;
}

function m07ProdutosComDesconto(produtos, percentualDesconto) {
  return produtos.map( item => { return {nome: item.nome, preco: item.preco*(100-percentualDesconto)/100} });
}

function m08TotalCarrinho(carrinho) {
  return carrinho.reduce( (total, item) => total+=item.quantidade*item.preco , 0);
}

function m09BuscarUsuarioPorEmail(usuarios, email) {
  return usuarios.find( usuario => usuario.email=email);
}

function m10UsuariosAtivos(usuarios) {
  return usuarios.filter( usuario => usuario.ativo==true );
}

function m11TodosMaioresDeIdade(usuarios) {
  return usuarios.every( usuario => usuario.idade>=18 );
}

function m12AlgumProdutoCaro(produtos, valorMinimo) {
  return produtos.some( produto => produto.preco>=valorMinimo );
}

function m13IndexarPorId(lista) {
  const resultado = {};

  for (const item of lista) {
    resultado[item.id] = item;
  }

  return resultado;
}

function m14MesclarObjetos(objeto1, objeto2) {
  return {
    ...objeto1,
    ...objeto2
  };
}

function m15SelecionarCampos(objeto, campos) {

  const resultado = {};

  for (const campo of campos) {
    resultado[campo] = objeto[campo];
  }

  return resultado;

}

function m16OmitirCampos(objeto, campos) {
  const resultado = { ...objeto };

  for (const campo of campos) {
    delete resultado[campo];
  }

  return resultado;
}

function m17AchatarUmaCamada(lista) {
  return lista.flat();
}

function m18Intersecao(lista1, lista2) {
  return [...new Set( lista1.filter( item => lista2.includes(item) ) )];
}

function m19Diferenca(lista1, lista2) {
  return [...new Set( lista1.filter( item => !lista2.includes(item) ) )];
}

function m20FrequenciaDeLetras(texto) {
  let resultado = {};
  for (const letra of texto.replaceAll(" ", "").toLowerCase()) { //texto.replace(/\s/g, "")
    if(resultado[letra]){resultado[letra]++;}
    else{resultado[letra] = 1;}
  }
  return resultado;
}

function m21Palindromo(texto) {
  return texto.toLowerCase().split('').reverse().join('').replaceAll(' ', '') == texto.toLowerCase().replaceAll(' ', '');
}

function m22Slugify(texto) {
  return texto.toLowerCase().replaceAll(' ', '-').replaceAll('á', 'a').replaceAll('!','');
}

function m23DiasEntreDatas(data1, data2) {
  const d1 = new Date(data1);
  const d2 = new Date(data2);
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function m24AdicionarDias(data, quantidadeDias) {
  const d = new Date(data);
  d.setDate(d.getDate() + quantidadeDias);
  return d;
}

function m25AgruparPorMes(lista) {
  const resultado = {};

  for (const item of lista) {
    const mes = item.data.slice(0, 7);

    if (resultado[mes]) {
      resultado[mes].push(item);
    } else {
      resultado[mes] = [];
      resultado[mes].push(item);
    }
  }

  return resultado;
}

function m26TransporMatriz(matriz) {
  const transposta = Array.from({ length: matriz[0].length }, () => []);

  for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[i].length; j++){
      transposta[j][i] = matriz[i][j];
    } 
  }
  return transposta;
}

function m27RotacionarArray(lista, quantidade) {
  let resultado = [...lista];
  for(let i=0; i<quantidade; i++){
    let primeiro = resultado[0];
    resultado = resultado.slice(1, resultado.length);
    resultado.push(primeiro);
  }
  return resultado;
}

function m28CompactarBooleanos(lista) {

}

function m29SomarPorCategoria(lista) {

}

function m30ValidarSenha(senha) {

}

function m31ChunkArray(lista, tamanho) {

}

function m32ZipArrays(lista1, lista2) {

}

function m33RemoverFalsy(lista) {

}

module.exports = {
  m01FizzBuzz,
  m02Fatorial,
  m03EhPrimo,
  m04OrdenarNumeros,
  m05AgruparPorParidade,
  m06ContarOcorrencias,
  m07ProdutosComDesconto,
  m08TotalCarrinho,
  m09BuscarUsuarioPorEmail,
  m10UsuariosAtivos,
  m11TodosMaioresDeIdade,
  m12AlgumProdutoCaro,
  m13IndexarPorId,
  m14MesclarObjetos,
  m15SelecionarCampos,
  m16OmitirCampos,
  m17AchatarUmaCamada,
  m18Intersecao,
  m19Diferenca,
  m20FrequenciaDeLetras,
  m21Palindromo,
  m22Slugify,
  m23DiasEntreDatas,
  m24AdicionarDias,
  m25AgruparPorMes,
  m26TransporMatriz,
  m27RotacionarArray,
  m28CompactarBooleanos,
  m29SomarPorCategoria,
  m30ValidarSenha,
  m31ChunkArray,
  m32ZipArrays,
  m33RemoverFalsy,
};
