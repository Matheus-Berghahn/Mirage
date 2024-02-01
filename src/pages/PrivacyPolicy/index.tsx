import '../../app/globals.css'
import Header from "../../pages/Home/components/Header";
import Footer from "../../pages/Home/components/Footer";

export default function PrivacyPolicy() {
    return (
      <div className='container mx-auto flex flex-wrap p-5 md:flex-row w-full fontBeVietnam'>
        <Header />
        <div className="bg-[#161616] text-[#e9e6df] min-h-screen flex items-center justify-center pt-20 w-full">

        <div className="bg-[#161616] p-8 rounded shadow-md max-w-5xl w-full">
            <h1 className="text-3xl font-bold mb-6 text-center">Política de Privacidade</h1>
    
            <p className="mb-4 text-[#c1beb4be]">Bem-vindo ao Mirage.ai!</p>
    
            <p className="mb-4 text-[#c1beb4be]">A sua privacidade é uma prioridade para nós. Esta política de privacidade explica como coletamos,
                utilizamos e protegemos as informações pessoais que você fornece ao usar nosso site.</p>
    
            <h2 className="text-xl font-semibold mb-4">1. Informações Coletadas</h2>
    
            <p className="mb-4">Ao utilizar nosso site, podemos coletar as seguintes informações:</p>
    
            <ul className="list-disc ml-6 mb-4 text-[#c1beb4be]">
                <li>Informações de Conta do Google: Se você optar por fazer login usando sua conta do Google, coletaremos
                    informações básicas do seu perfil, como seu nome e endereço de e-mail.</li>
            </ul>
    
            <h2 className="text-xl font-semibold mb-4">2. Como Utilizamos Suas Informações</h2>
    
            <p className="mb-4">Utilizamos as informações coletadas para:</p>
    
            <ul className="list-disc ml-6 mb-4 text-[#c1beb4be]">
                <li>Autenticação: Permitir que você faça login de forma segura usando sua conta do Google.</li>
                <li>Personalização: Oferecer uma experiência personalizada com base nas informações do seu perfil.</li>
            </ul>
    
            <h2 className="text-xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Não compartilhamos suas informações pessoais com terceiros, a menos que seja necessário para
                fornecer nossos serviços ou exigido por lei.</p>
    
            <h2 className="text-xl font-semibold mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Utilizamos cookies e tecnologias semelhantes para melhorar a funcionalidade do site e
                personalizar sua experiência. Você pode controlar as configurações de cookies através das opções do seu
                navegador.</p>
    
            <h2 className="text-xl font-semibold mb-4">5. Segurança</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado ou
                divulgação.</p>
    
            <h2 className="text-xl font-semibold mb-4">6. Acesso e Controle de Informações Pessoais</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Você pode acessar, corrigir ou excluir suas informações pessoais a qualquer momento através das
                configurações da sua conta.</p>
    
            <h2 className="text-xl font-semibold mb-4">7. Alterações na Política de Privacidade</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Reservamo-nos o direito de fazer alterações nesta política. As alterações serão comunicadas
                através do site ou por e-mail.</p>
    
            <h2 className="text-xl font-semibold mb-4">8. Contato</h2>
    
            <p className="mb-4 text-[#c1beb4be]">Se tiver dúvidas sobre nossa política de privacidade, entre em contato conosco em <a href='mailto:mirage.ai@gmail.com.br' className='underline'>mirage.ai@gmail.com.br</a>.</p>

            <p className="text-sm text-[#c1beb470]">Atualizado em 10 de novembro de 2023.</p>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
  