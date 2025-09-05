import ItemList from "./ItemList";

 
const RestaurantCategories = ({data,showItems,setShowIndex})=>{

    console.log(data)
    
    const HandleClick=()=>{
   setShowIndex();
    }
    return(
        <div>
        <div className="bg-white p-3 text-center 
           shadow-lg border border-s-yellow-50 w-7/12 m-auto my-3 rounded-lg">
        {/* header addon */}
        <div className=" flex  cursor-pointer 
         justify-between" onClick = {HandleClick}>
       <span className=" bg-white font-bold text-lg">
        {data.title}({data.itemCards.length})
        </span>
       <span>🢗</span>
       </div>
       {showItems && <ItemList items={data.itemCards} />}
        </div>
        </div>
    )

}

export default RestaurantCategories;
