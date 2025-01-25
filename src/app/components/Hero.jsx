const Hero = () => {
  return (
      <div>
          <img className="w-full lg:hidden" src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce:VP2-859x540" alt="" />
          <div className="w-full hidden lg:block bg-[url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce:VP5-1920x600')] h-[600px]">
              <div className="flex justify-between">
              <div className="px-7 mt-3 pt-[120px] relative left-[100px] top-[80px]">
          <div className="text-5xl font-semibold hidden lg:block text-black">Achieve the extraordinary</div>
          <div className="mt-6 hidden lg:block text-black font-light text-2xl">Microsoft 365 delivery cloud storage, security and Microsoft <br /> Copilot in your favourite apps - all in one planl</div>
          <div className="mt-6 hidden lg:block"><button className="text-white bg-black px-3 py-2">Shop Microsoft 365</button></div>
                  </div>
          {/* <img className="w-[600px] relative right-[50px] bottom-[70px]" src="https://www.pngplay.com/wp-content/uploads/13/Illustration-Art-No-Background.png" alt="" /> */}
          
          </div>
          </div>
          <div className="px-7 mt-3">
          <div className="text-3xl font-bold lg:hidden">Achieve the extraordinary</div>
          <div className="mt-4 lg:hidden">Microsoft 365 delivery cloud storage, security and Microsoft Copilot in your favourite apps - all in one planl</div>
          <div className="mt-3 lg:hidden"><button className="text-white bg-blue-600 px-3 py-2">Shop Microsoft 365</button></div>
          </div>
        <hr className="mt-3 border-b lg:hidden" />
    </div>
  )
}
export default Hero