import { SearchOutlined } from "@ant-design/icons"

const MainBanner = () => {
    return (
        <div className=" ">
            <div className="bg-[url(/images/landing-page/banner-main-image.jpg)] w-[100%] h-[450px] bg-center bg-no-repeat bg-cover ">
                <div className="bg-black h-[100%] w-[100%] bg-opacity-50 flex pt-[80px]">
                    <div className="w-[50%]  mx-auto text-center ">
                        <h1 className="text-white font-[700] text-[44px] tracking-wide ">Search Luxury Flats & Rooms</h1>
                        <p className="text-white font-[400] text-[14px] mt-3 mb-[35px] ">Thousands of luxury flats and rooms enthusiasts just like you visit our website</p>


                        <div >
                            <div className="bg-white h-[50px] w-[80%] mx-auto rounded-lg p-2 ps-4  flex justify-between">
                                <input
                                    className="w-[70%] border-b-2 border-transparent focus:border-gray-300   focus:outline-none hover:border-gray-300 transition-all duration-300"
                                    type="text"
                                    placeholder="Place, neighbourhood, school or agent..."
                                />
                                <div className="flex  gap-2">
                                    <div>
                                        <span className="  ">
                                            <img src="/icons/filterIcon.png " alt="" className="h-[24px] w-[22px] mt-1 bg-transparent cursor-pointer"  />

                                        </span>

                                    </div>

                                    <button className="bg-orange-400 text-[16px] text-white font-[600]  w-[100px] px-3 py-1 rounded-lg flex  ">Search <span className="pt-[0px]"><SearchOutlined className="ms-1" style={{ color: 'white', fontSize: '15px', fontWeight: '500' }} /></span>  </button>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </div>
            {/* <img
                src="/images/landing-page/banner-main-image.jpg"
                alt=""
                className="w-[100%] h-[480px] "

            /> */}
        </div>
    )
}

export default MainBanner