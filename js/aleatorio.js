const nomes = ["Ântonio", "Matheus", "Gustavo", "Maria",
    "Pedro", "Luna", "Rafael"];
    export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
    }
    export const nome = aleatorio(nomes)