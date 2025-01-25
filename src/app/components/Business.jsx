import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Business = () => {
  return (
      <div className="mb-10">
          <div className="text-4xl mb-6 font-bold ml-[50px]">For business</div>
          <div className="flex justify-center gap-4 flex-wrap">
          <div className="w-[370px] border">
              <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-AI-7Ed-Sapphire-MC001?wid=380&hei=213&fit=crop" alt="" />
              <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Surface Laptop Copilot+ PC</div>
                  <div className="mb-3">Unlock AI features like Live Caption and Cocreator with this exceptionally powerful laptop.</div>
                  <div><button className="mb-4 px-4 py-2 bg-blue-700 text-white font-semibold">Learn more</button></div>
              </div>
          </div>
          <div className="w-[370px] border">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Native-App-ROW?wid=406&hei=230&fit=crop" alt="" />
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Copilot is your AI companion</div>
                  <div className="mb-3">Always by your side, ready to support you whenever and wherever you need it.</div>
                  <div><button className="mb-4 px-4 py-2 bg-blue-700 text-white font-semibold mt-[25px]">Download the Copilot app</button></div>
              </div>
          </div>
          <div className="w-[370px] border">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSX-CP-Xbox-Series-X?wid=406&hei=230&fit=crop" alt="" />
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Xbox Series X</div>
                  <div className="mb-3">The fastest, most powerful Xbox ever.</div>
                  <div><button className="mb-4 px-4 py-2 bg-blue-700 text-white font-semibold mt-[75px]">Shop Xbox Series X</button></div>
              </div>
          </div>
          <div className="w-[370px] border">
          <img src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Game-Pass-Update-September-2024?wid=406&hei=230&fit=crop" alt="" />
          <div className="px-[30px] mt-3">
                  <div className="font-bold text-2xl">Surface Laptop Copilot+ PC</div>
                  <div className="mb-3">Unlock AI features like Live Caption and Cocreator with this exceptionally powerful laptop.</div>
                  <div><button className="mb-4 px-4 py-2 bg-blue-700 text-white font-semibold">Join now</button></div>
              </div>
          </div>

            
             

          
          </div>
          <div className="flex gap-4 ml-14 mt-5 items-center">
                  <div className="text-2xl font-semibold">Follow Microsoft</div>
                  <div className="text-2xl"><FaFacebookF />
</div>
                  <div className="text-2xl"><FaXTwitter />
</div>
                  <div className="text-2xl"><FaYoutube />
</div>
              </div>
    </div>
  )
}
export default Business