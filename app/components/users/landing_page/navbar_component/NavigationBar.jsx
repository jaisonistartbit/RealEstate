import PropTypes from "prop-types";
import './NavigationBarCss.css'
import { DownOutlined,   UserOutlined } from "@ant-design/icons";
import { Phone } from "lucide-react";
export default function NavigationBar({ children }) {
    return (
        <div>
            <div>
                <nav className="  grid grid-cols-12    px-5 py-2">

                    <div className="col-span-3 grid grid-cols-10" >
                        <div className="col-span-2 pt-[2px] " >
                            <img src="/svgs/logo.svg " alt="" className="h-[30px] w-[30px] m-auto" />
                        </div>
                        <div className="col-span-3 font-[700] " >
                            <h1 className="mb-0">
                                HOMIES
                            </h1>

                            <p className="text-gray-400 text-[11px] font-[400] tracking-[2px] mt-0">
                                Real Estate
                            </p>

                        </div>
                    </div>

                    <div className="col-span-5 text-center flex pt-2 justify-evenly" >
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Home <DownOutlined style={{fontSize:'10px'}} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Listing <DownOutlined style={{fontSize:'10px'}} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Property <DownOutlined style={{fontSize:'10px'}} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Pages <DownOutlined style={{fontSize:'10px'}} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Blog <DownOutlined style={{fontSize:'10px'}} />
                        </div>
                        <div className="text-[16px] hover:text-[17px]  text-black hover:text-orange-400 cursor-pointer hover:underline decoration-2 underline-offset-8 hover:font-[600]">
                            Contact  
                        </div>
                         
                    </div>

                    <div className="col-span-4 text-center grid grid-cols-12" >
                        <div className="col-span-4 pt-2 col-start-3 flex">
                            <Phone  style={{ color: 'rgb(251 146 60)',height:'18px',marginTop:'3px' }} /> <span className="text-black font-[500]">(603) 555-0123</span>
                        </div>

                        <div className="col-span-2 pt-2">

                            <span className="   px-2 py-2 border border-gray-200 rounded-[10px]">
                                <UserOutlined />
                            </span>


                        </div>
                        <div className="col-span-4">
                            <button className="text-orange-400 py-2 px-4 border border-orange-400  rounded-[10px] hover:bg-orange-400 hover:text-white">Add Property</button>
                        </div>
                    </div>
                </nav>
            </div>
            <div>{children}</div>
        </div>
    );
}

NavigationBar.propTypes = {
    children: PropTypes.node.isRequired, // This validates that children should be a React node
};
