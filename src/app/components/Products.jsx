const Products = () => {
    return (
      
        <div>
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





            <div>

                {/* <div className=" flex justify-center text-center items-center">
                    <img className="w-[1500px] my-[100px]" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1596x600" alt="" />
                </div> */}
                <div className="bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-XSS-Hero-Xbox-Series-S:VP5-1596x600')] my-11 mx-[100px]">
                    <div className="pl-[100px] items-center py-[220px]">
                    <h1 className="text-3xl mb-3">Xbox Series S</h1>
                    <h1 className="mb-3">Next-gen performance in the smallest Xbox ever</h1>
                    <button className="px-4 py-2 text-white bg-blue-500 font-semibold">Shop Xbox Series S</button>
                    </div>
                </div>
            </div>
      </div>
  )
}
export default Products