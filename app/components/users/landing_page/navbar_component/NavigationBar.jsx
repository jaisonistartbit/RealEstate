import PropTypes from "prop-types";
import './NavigationBarCss.css'
import { PhoneOutlined, UserOutlined } from "@ant-design/icons";
export default function NavigationBar({ children }) {
    return (
        <div>
            <div>
                <nav className="  grid grid-cols-12    px-5 py-2">

                    <div className="col-span-4 grid grid-cols-10" >
                        <div className="col-span-1 pt-[2px] " >
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

                    <div className="col-span-4 text-center" >
                        re
                    </div>

                    <div className="col-span-4 text-center grid grid-cols-12" >
                        <div className="col-span-4">
                            <PhoneOutlined className="text-orange-[400]" /> <span className="text-black font-[500]">(603) 555-0123</span>
                        </div>

                        <div className="col-span-2">
                        <span className="px-2 py-2">
                                <UserOutlined />

                            </span>
                        </div>
                        <div className="col-span-4">
                            <button className="text-orange-400 py-2 px-4 border border-orange-400  rounded-[10px]">Add Property</button>
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
