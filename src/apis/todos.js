export const URLKEY = 'https://jsonplaceholder.typicode.com/todos/1'
export const fetchCars = async () => {
	// const resp = await fetch(CARS_ENDPOINT.slice(0, -3));
  const resp = await fetch(URLKEY);
  if (!resp.ok) throw new Error("Failed to fetch");
  return await resp.json();
};