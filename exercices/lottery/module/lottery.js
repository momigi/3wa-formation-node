const loto = function (min, max, count) {
    const draw = new Set();
  
    // `size` permet de récuperer le nombre d'element dans un Set (à la place de length car c'est pas un tableau)
    while (draw.size < count) {
        const random = Math.floor(Math.random() * (max - min + 1) + min);
        // max : 50
        // min : 20
        // 50 - 20 = 30 + 20 = 50
    
        draw.add(random);
      }
    
      return Array.from(draw);
    };
    
    const gagnant = function (players) {

        const randomIndex = Math.floor(Math.random() * players.length);
      
        return players[randomIndex];
      };
            
      module.exports = { loto, gagnant };