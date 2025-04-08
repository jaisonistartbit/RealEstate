import { supabase } from "../utils/supabaseClient";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const { data, error } = await supabase.from('books').select('*');
  if (error) throw new Error(error.message);
  return json(data);
};

export default function Books() {
  const books = useLoaderData();

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book?.id}>
            {book?.title} by {book?.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
