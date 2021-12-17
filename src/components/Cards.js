import "../style/animation.css";
export default function Cards({iconsrc}){

    return(
     
        <div className="animation pl-4 ">
   
    <div className="animation-item flex rounded overflow-hidden shadow-lg">
      <img className="w-64 h-64 " src={iconsrc} alt="img"/>
    
        </div>
        </div>
     
    )
}