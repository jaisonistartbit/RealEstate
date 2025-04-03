import { ArrowRightLeft, Bookmark, MapPin } from "lucide-react"
import './cardcss.css'

const CardView = () => {

    const images = ['/images/flats/FlatPhoto5.jpg', '/images/flats/FlatPhoto1.jpg', '/images/flats/FlatPhoto2.jpg', '/images/flats/FlatPhoto3.jpg', '/images/flats/FlatPhoto4.jpg']
    return (
        <div className="w-[80%] mx-auto grid grid-cols-12 gap-[40px] mt-[50px] mb-5">
            {
                images?.map((item, key) => {


                    return <div key={key} className="col-span-4 border rounded-lg">
                        <div className={`bg-[url(${item})] w-[100%] h-[250px] bg-center bg-no-repeat bg-cover rounded-tl-lg rounded-tr-lg image-div `}>
                             <div className="h-[100%] w-[100%] rounded-tl-lg rounded-tr-lg  bg-black  bg-opacity-40  card-hidden  relative pt-4 px-3">
                                <p className="text-start"><span className="rounded-[20px] bg-orange-400 text-white px-3 py-1  text-[12px] me-1 font-[700]">Featured</span> <span className="rounded-[20px] bg-gray-700 text-white px-5 py-1  text-[12px] me-1 font-[700] ">Rent</span></p>

                                 <Bookmark style={{color:'rgb(251 146 60)',backgroundColor:'white' ,borderRadius:'50%',padding:'7px' ,height:'36px',width:'36px' ,margin:'auto',position:'absolute',bottom:'0',top:'0',right:'0',left:'0'}} /> 

                            </div>
                        </div>
                        <div className="px-3 py-2">
                            <h1 className=" text-[18px] font-[600] text-start" style={{ wordSpacing: "1px" }}>
                                Elegant studio flat
                            </h1>
                            <p className="flex my-2 text-[12px] text-gray-500 ">
                                <span className="text-gray-500 text-start me-1 pt-[1px] "><MapPin className="h-[14px] w-[14px]" /></span > <span className=" ">102, Chitrakoot, Veshali, Jaipur, Raj</span>
                            </p>
                            <p className="mb-3 text-start">
                                <span>  3 <span className="text-gray-500"> Bed </span></span> <span className="mx-3">  3 <span className="text-gray-500"> Bath</span> </span>  <span>  4,043 <span className="text-gray-500"> Sqft</span> </span>
                            </p>
                            <hr />
                            <div className="flex justify-between mt-3">
                                <div className="  text-[14px] font-[600] text-orange-400">
                                    $ 8600
                                </div>
                                <div className="  flex text-[14px] ">
                                    <span className="pt-1"><ArrowRightLeft style={{ height: '13px' }} /></span> Compare
                                </div>
                                <div className="  ">
                                    <button className="border border-orange-400 text-[14px] text-orange-400 font-[600]    px-2 py-[2px] rounded-lg">Details</button>
                                </div>

                            </div>

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default CardView


