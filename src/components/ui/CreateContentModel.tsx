import { CrossIcon } from "../Icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

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







