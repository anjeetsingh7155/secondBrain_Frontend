import { CrossIcon } from "../Icons/CrossIcon"
import { Button } from "./Button"

interface contentModelInterface{
    open : boolean,
    onClose : ()=>void
}

export const CreateContentModel = ({open ,onClose}:contentModelInterface)=>{

    return(
        <div>
            {open && <div className="h-screen w-screen fixed top-0 left-0 bg-black opacity-60 flex justify-center" >
                <div className="flex flex-col justify-center ">
                    <span className="bg-amber-50 p-4 rounded-sm">
                        <div className="flex justify-end" onClick={onClose}>
                            <CrossIcon size="md"/>
                        </div>
                       <div>
                         <Input placeholder ={"Title"}></Input>
                        <Input placeholder ={"Link"}></Input>
                       </div>
                       <div className="flex justify-center">
                       <Button variant={"primary"} size={"lg"} text={"Submit"}></Button>
                       </div>
                    </span>
                </div>
            </div>}
        </div>
    )
}







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