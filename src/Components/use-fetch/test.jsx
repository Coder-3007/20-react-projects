import useFetch from ".";

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "http://dummyjson.com/products",
    {}
  );

  console.log(data, error, pending);
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {pending ? <h3>Pendng ! Please wait</h3> : null}
      {error ? <h3>{error}</h3> : null}
      {/* Getting the data here */}
      {data && data.products && data.products.length
        ? data.products.map((productItem) => (
            <p key={productItem.key}>{productItem.title}</p>
          ))
        : null}
    </div>
  );
}
