import CardView from "./CardView"

const FlatListing = () => {
    return (
        <div className="  ">
            <div className="text-center mt-[50px] ">

                <h1 className="text-[28px] font-[700] tracking-wide mb-2 ">
                    Today&apos;s Luxury Listings
                </h1>
                <p className="text-gray-500 text-[15px] font-[400] tracking-[1px]   ">Thousands of luxury flats and rooms enthusiasts just like you visit our website </p>
                
                <CardView  />

                
            </div>
        </div>
    )
}

export default FlatListing