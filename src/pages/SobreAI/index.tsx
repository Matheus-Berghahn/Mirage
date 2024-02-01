import '../../app/globals.css'
import Header from "../../pages/Home/components/Header";
import Footer from "../../pages/Home/components/Footer";

export default function SobreAI() {
    return (
      <div className='container mx-auto flex flex-wrap p-5 md:flex-row w-full fontBeVietnam'>
        <Header />
        <div className="bg-[#161616] text-[#e9e6df] min-h-screen flex items-center justify-center pt-20 w-full">

        <div className="bg-[#161616] p-8 rounded shadow-md max-w-5xl w-full">
            <h1 className="text-3xl font-bold mb-6 text-center">Sobre a AI de imagens</h1>

            <h2 className="text-xl font-semibold mb-4">1. Prompts na Geração de Imagens:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Definição</i>: Prompts são instruções fornecidas à IA para orientar a criação de imagens específicas.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Funcionamento</i>: A IA interpreta os prompts contextualmente, aplicando conhecimentos adquiridos durante o treinamento.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Exemplo Prático</i>: Um prompt como "um pôr do sol sobre uma cidade futurística" orienta a IA na criação de uma imagem correspondente.</p>

            <h2 className="text-xl font-semibold mb-4">2. Funcionamento Interno da IA:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Treinamento</i>: Modelos como o GPT-3.5 são treinados em uma ampla variedade de dados visuais para entender padrões, texturas e conceitos.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Processamento de Informações</i>: A IA processa informações visuais, aprendendo a reconhecer elementos como cores, formas e composições.</p>

            <h2 className="text-xl font-semibold mb-4">3. Aplicações Práticas:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Ilustração Personalizada</i>: Artistas podem usar prompts para gerar ilustrações sob medida, economizando tempo e inspirando novas ideias.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Design Automático</i>: A IA pode ser empregada para gerar designs gráficos, layouts e até mesmo conceitos arquitetônicos com base em prompts específicos.</p>

            <h2 className="text-xl font-semibold mb-4">4. Desafios e Limitações:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Compreensão Contextual</i>: A IA ainda enfrenta desafios na compreensão completa do contexto, levando, em alguns casos, a resultados inesperados.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Sensibilidade Ética</i>: É fundamental garantir que as criações da IA estejam em conformidade com padrões éticos, evitando viés e conteúdo inadequado.</p>

            <h2 className="text-xl font-semibold mb-4">5. Colaboração entre Humano e Máquina:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Ferramenta Criativa</i>: A IA serve como uma ferramenta colaborativa, inspirando artistas e designers com resultados inovadores.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Coexistência Criativa</i>: A interação entre a criatividade humana e a IA redefine os limites da expressão visual, ampliando o escopo da inovação.</p>

            <h2 className="text-xl font-semibold mb-4">6. Evolução Futura:</h2>
    
            <p className="mb-4 text-[#c1beb4be]"><i>Melhoria na Qualidade</i>: Espera-se que os modelos futuros aprimorem a qualidade das imagens geradas, refletindo uma compreensão mais sofisticada de nuances visuais.</p>
            <p className="mb-4 text-[#c1beb4be]"><i>Inovação Contínua</i>: A Geração de Imagens por IA continuará impulsionando a inovação, moldando um futuro onde a criatividade humana e a inteligência artificial se complementam.</p>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
  