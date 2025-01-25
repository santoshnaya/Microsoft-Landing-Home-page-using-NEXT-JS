import { FaMicrosoft } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { GiTablet } from "react-icons/gi";




const Features = () => {
  return (
      <div className="flex justify-center flex-wrap text-center gap-10 my-[90px]">
          <div>
              <div className="text-3xl text-center"><FaMicrosoft />
              </div>
              
          </div>
          <div>
              <div className="text-3xl"><FaXbox />
              </div>

          </div>
          <div>
              <div className="text-3xl"><FaMicrosoft />
              </div>
              
          </div>
          <div>
              <div className="text-3xl"><GiTablet />
              </div>
              
          </div>
          
    </div>
  )
}
export default Features