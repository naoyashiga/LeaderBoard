


export const getRanks = (scores: number[]): number[] => {
  const sortedScores = scores.slice().sort((a, b) => b - a);

  return scores.map((score) => sortedScores.findIndex((e) => e === score)).map((x) => x + 1);
};

export const addRandomScore = (scores: number[]): number[] => {
  return scores.map((d: number, i) => {
    const flag = Math.floor(Math.random() * 10) % 3;

    if (flag) {
      d += Math.floor(Math.random() * 10000);
    }
    return d;
  });
};