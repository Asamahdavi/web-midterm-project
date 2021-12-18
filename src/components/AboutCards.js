export default function Cards({ props, title,img }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
         <img className="w-full pb-10 " src={img} alt="" />
        <div className="font-bold text-left text-xl mb-2  text-black ">
          {title}
        </div>
        <p className="text-gray-700 text-left text-base">{props}</p>
      </div>
    </div>
  );
}
