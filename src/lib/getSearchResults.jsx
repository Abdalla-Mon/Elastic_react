export default async function handleSearch(q,page = 1,size=2) {
    const url = "http://localhost:3000/search";
    const data=await fetch(url + "?q=" + q + "&page=" + page + "&size=" + size);
    return data.json();
}

