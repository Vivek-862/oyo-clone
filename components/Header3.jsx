'use client'

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400  h-60">
        <div className=" p-5">
            <h2 className="text-4xl text-white text-center font-bold">
                Over 157,000 hotels and homes across 35 countries
            </h2>
            <div className="grid grid-cols-5 mx-20 my-5">
                <input type="text" placeholder="Search..." className="  h-16  outline-none px-3 text-lg col-span-2 border-r-2 border-gray-400"/>
                <input type="text" placeholder="Search..." className=" h-16  outline-none px-3 text-lg col-span-1 border-r-2 border-gray-400"/>
                <input type="text" placeholder="Search..." className=" h-16 outline-none px-3 text-lg col-span-1 border-r-2 border-gray-400"/>
                <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white">Search</button>
            </div>
            <div className="flex mx-20 my-5 "> 
            <button type="submit" className="h-16 px-3 py-2  text-bold hover:cursor-pointer  text-white mr-5">Continue your search</button>
            <button type="submit" className="h-16 px-3 py-2 text-bold border-2 border-white  hover:cursor-pointer hover:bg-gray-500  text-white mr-5 rounded-xl">Homestay in India hotels</button>
            </div>
        </div>

    </div>
  )
}

export default Header3