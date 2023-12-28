function getElo(win, loses) {
    const winBalance = win - loses;
    let level = '';
    const levels = [
        { limit: 10, elo: 'Ferro' },
        { limit: 20, elo: 'Bronze' },
        { limit: 50, elo: 'Prata' },
        { limit: 80, elo: 'Ouro' },
        { limit: 90, elo: 'Diamante' },
        { limit: 100, elo: 'Lendário' },
        { limit: Infinity, elo: 'Imortal' }
    ];

    for (const item of levels) {
        if (win <= item.limit) {
            level = item.elo;
            break;
        }
    }

    const message = `O Herói tem um saldo de ${winBalance} e está no nível de ${level}`;
    return message;
}

// Exemplo de uso:
const result = getElo(81, 20);
console.log(result); // Saída: "O Herói tem um saldo de 61 e está no nível de Diamante"
