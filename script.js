function mudarBG(cor) {
    cor = cor.trim().toLowerCase();
    document.body.style.backgroundColor = cor;
  
    const titulo = document.querySelector('h1');
  
    if(cor === 'black' || cor === '#000000') {
      titulo.style.color = 'white'; 
    }else if (cor === 'white' || cor === '#ffffff') {
      titulo.style.color = 'black'; 
    }else {
      titulo.style.color = ''; 
    }
  }
  
  const corEscolhida = prompt('Digite o nome ou o código de uma cor para o fundo da página:');
  
  if (corEscolhida) {
    mudarBG(corEscolhida);
  } else {
    alert('Você não digitou nenhuma cor.');
  }
  