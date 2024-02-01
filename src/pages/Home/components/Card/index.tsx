

interface CardProps{
    children: React.ReactElement | any
} 

export default function Card({ children }:CardProps) {


    return (
        <>
        <section className="bg-[#e9e6df] md:p-2 mt-10 md:mt-40 md:w-1/2 rounded-md">
            <div className="mx-auto max-w-screen-xl py-2 px-4 md:py-10 md:px-10 m-5 lg:flex lg:items-center">
                    
                <div className="mx-auto max-w-xl text-center">
                <h1
                    className=" text-[#161616] text-3xl md:text-5xl font-extrabold pb-5 tracking-wider fontBeVietnam">
                    Crie a imagem que imaginar
                </h1>
                

                <p className="text-[#333333] mx-auto px-4 mt-4 max-w-xl text-sm md:text-2xl fontCabinet">
                    Insira prompts de texto e use Dall-E para gerar imagens e artes usando o Mirage.ai
                </p>

                    {children}
                
                </div>
            </div>
        </section>
        </>
    )
}