interface input{
    onChange? : ()=>void
    placeholder : string 
}
export function Input({onChange , placeholder} :input){
    return(
        <div className="">
            <input type="text" placeholder={placeholder} onChange={onChange}className="px-4 py-2 border rounded-md  m-2"/>
        </div>
    )
}