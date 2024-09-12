import Products from '../../../../Components/Data/Productpage/Products';

const ProductDetail = ({ params }) => {
  const { id } = params;
  const product = Products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 w-11/12">
        <h1 className="text-2xl font-bold mb-4">{product.Name}</h1>
        <img
          src={product.Image}
          alt={product.Name}
          className="w-full h-96 object-cover mb-4"
        />
        <p className="text-lg">{product.Description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
