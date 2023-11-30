export const URLKEY = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = async () => {
  const resp = await fetch(URLKEY);
  if (!resp.ok) throw new Error("Failed to fetch");
  return await resp.json();
}
