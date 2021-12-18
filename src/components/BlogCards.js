import "../style/animation.css";


export default function blogCards({img,title,prag}){

    return(
        <div class='at-container'>
 
      <div className=" at-item max-w-sm w-72 h-4/5 rounded overflow-hidden shadow-lg">
  <img className="w-full  " src={img} alt=""/>
  <div className="px-6 py-4 ">
    <div className="font-bold py-4 text-xl mb-2 text-black ">{title}</div>
    <p className="text-gray-700 h-64 text-base ">{ prag}
    </p>
  
</div>
  </div>
</div>
     
        
     
    )
}