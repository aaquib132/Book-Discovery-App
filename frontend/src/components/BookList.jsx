import BookCard from "./BookCard";

export default function BookList({ books }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-hide snap-x">
      {books.map(b => (
        <BookCard key={b.id} book={b} />
      ))}
    </div>
  );
}
