import '../../app/globals.css'
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";

export default function Terms() {
    return (
      <div className='container mx-auto flex flex-wrap p-5 md:flex-row w-full fontBeVietnam'>
        <Header />
        <div className="bg-[#161616] text-[#e9e6df] min-h-screen flex items-center justify-center pt-20 w-full">

        <div className="bg-[#161616] p-8 rounded shadow-md max-w-5xl w-full">
            <h1 className="text-3xl font-bold mb-6 text-center">Termos de Uso</h1>
    
            <p className="mb-4 text-[#c1beb4be]">Bem-vindo ao Mirage.ai!</p>
    
            <p className="mb-4 text-[#c1beb4be]">Ao acessar e utilizar nosso site, você concorda em cumprir estes Termos de Uso. Por favor, leia
            cuidadosamente.</p>
    
            <h2 className="text-xl font-semibold mb-4">1. Uso Autorizado</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Você concorda em utilizar este site apenas para os fins autorizados pelos Termos de Uso e
            pelas leis aplicáveis.</p>
    
            <h2 className="text-xl font-semibold mb-4">2. Conteúdo do Usuário</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Ao fornecer qualquer conteúdo para o site, você concede a Mirage.ai uma licença
            perpétua, irrevogável, mundial, livre de royalties para usar, modificar, exibir e distribuir esse conteúdo.</p>

            <h2 className="text-xl font-semibold mb-4">3. Responsabilidades do Usuário</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Você é responsável por manter a confidencialidade de suas informações de conta e por todas as
            atividades que ocorrem em sua conta.</p>
    
            <h2 className="text-xl font-semibold mb-4">4. Alterações nos Termos de Uso</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Reservamo-nos o direito de fazer alterações nestes Termos de Uso. As alterações entrarão em
            vigor imediatamente após a publicação no site.</p>
    
            <h2 className="text-xl font-semibold mb-4">5. Contato</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Se tiver dúvidas sobre nosso Termos de Uso, entre em contato conosco em <a href='mailto:mirage.ai@gmail.com.br' className='underline'>mirage.ai@gmail.com.br</a>.</p>

            <p className="text-sm text-[#c1beb470]">Atualizado em 10 de novembro de 2023.</p>
        </div>
        </div>
        <Footer />
      </div>
    )
  }

  