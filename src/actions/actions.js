

export async function handleSearch(q, page = 1, size = 2) {
  const url = "https://elastic-react-2.onrender.com/";
  // change this to thebakend url
  const response = await fetch(
    url +"search"+ "?q=" + q + "&page=" + page + "&size=" + size,
  );
  const data = await response.json();
  const documents = data.hits.hits.map((hit) => hit._source);
  const total = data.hits.total;
  return { documents, total: total.value };

}
