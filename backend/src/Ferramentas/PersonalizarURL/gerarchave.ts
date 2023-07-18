function gerarChave(tamanho: number): string {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let chave = "";

  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    chave += caracteres.charAt(indice);
  }


  return chave;
}

export default gerarChave;
