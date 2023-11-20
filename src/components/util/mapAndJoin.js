export function mapAndJoin(data, propertyName) {
  return data.map((item) => item[propertyName]).join(", ");
}

export function formatLocaleString(data){
  const animeScore = data || "Unknown"
  const scoredBy = animeScore.toLocaleString();

  return scoredBy
}