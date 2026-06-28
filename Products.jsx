import UseFetch from "./UseFetch"


const Products = () => {
  const { data, loading, error } = UseFetch(
    "https://api.escuelajs.co/api/v1/products"
  )

  if (loading)
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <h1 className="text-white text-3xl">
        Loading...
      </h1>
    </div>
  )
  if (error) return <h1>{error}</h1>

  return (
    <div>
      <h1 className="bg-black text-white text-4xl text-center pt-10">Photos</h1>
      <div className="flex justify-evenly text-white  bg-black flex-wrap p-10 ">
      {data.slice(0, 100).map((item) => (
  <div className="p-4 mb-10 border-4 border-white   items-center" key={item.id}>
    

    <img 
      src={item.images?.[0]}
      alt={item.title}
      width="200"
    />
    <h4 >{item.title}</h4>
  </div>
))}
    </div>
    </div>
  )
}

export default Products