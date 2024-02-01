import Button from "../Button";

interface ModalProps{
    children: React.ReactElement;
    title: string;
    onClose: () => void;
} 

export default function Modal({ children, title, onClose }:ModalProps) {

    return (
        <div 
        className="fixed inset-0 z-10 overflow-y-auto backdrop-brightness-50" 
        >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
            
            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-[#e9e6df] sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
            
                <div className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-black flex flex-col-reverse gap-4 justify-between items-center lg:flex lg:flex-row">
                    <h1>{title}</h1>
                    <Button isWhite title="Fechar" onClick={() => {onClose()}}/>
                </div>
                
                <div>
                    {children}
                </div>
            </div>
        </div>
    </div>
    )
}