export default function Label({children, htmlFor}){
    return(
        <div>
        <label htmlFor={htmlFor} className="block font-medium text-sm text-gray-700 undefined">
        { children }
        </label>
        </div>
    )   

}