import Button from "../button/button";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Link } from "react-router-dom";

const DialogModal = forwardRef(({ text, styleType }, ref)=>{
    const dialogRef = useRef(null);

    //Expose showModal function to parent component via ref
    useImperativeHandle(ref, ()=>({
        showModal() {
            if(dialogRef.current) {
                dialogRef.current.showModal();
            }
        },

        closeModal() {
            if(dialogRef.current) {
                dialogRef.current.close();
            }
        }
    }))

    return (
        <dialog ref={dialogRef} className="w-200 h-100 border-0 rounded-md p-10">
            <p className="mb-3">{text}</p>
            
            <Link to='/start'>
                <Button
                    styleType={styleType}
                    text = "Restart"
                />
            </Link>
        </dialog>
    );
});



export default DialogModal;