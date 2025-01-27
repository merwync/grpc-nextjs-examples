import Publications from '@/components/Books';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home - My Books</h1>
      <Publications />
    </div>
  );
};

export default HomePage;
