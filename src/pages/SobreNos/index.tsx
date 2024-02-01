import '../../app/globals.css'
import Header from "../Home/components/Header";
import Footer from "../Home/components/Footer";

export default function SobreNos() {
    return (
      <div className='container mx-auto flex flex-wrap p-5 md:flex-row w-full fontBeVietnam'>
        <Header />
        <div className="bg-[#161616] text-[#e9e6df] min-h-screen flex items-center justify-center pt-20 w-full">

        <div className="bg-[#161616] p-8 rounded shadow-md max-w-5xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Sobre Nós</h1>

            <p>Equipe focada em programação e inteligência artificial. Nosso site é especializado na criação de imagens através de algoritmos inovadores. No universo dinâmico da programação e IA, somos os arquitetos visionários que transformam linhas de código em obras de arte visuais.</p>
            <br></br>
            <p>No coração da nossa missão está o compromisso inabalável com a inovação. Utilizamos as mais avançadas técnicas de programação e inteligência artificial para gerar imagens que desafiam as fronteiras da criatividade. Seja na geração de paisagens surreais, retratos hiper-realistas ou conceitos futuristas, a Mirage está na vanguarda, moldando o futuro da visualização algorítmica.</p>
            <br></br>
            <p>Explore nosso site e mergulhe no mundo fascinante da programação visual. Apresentamos uma galeria diversificada de projetos que ilustram a versatilidade e a profundidade de nossas habilidades. Cada linha de código é meticulosamente escrita para criar resultados visuais deslumbrantes, refletindo a fusão perfeita entre arte e ciência.</p>
            <br></br>
            <p>Além disso, oferecemos recursos educativos para aqueles que desejam desbravar o vasto território da programação e inteligência artificial. Em nossa seção de tutoriais, compartilhamos insights valiosos e dicas práticas para inspirar uma nova geração de entusiastas a explorar o potencial ilimitado da tecnologia.</p>
            <br></br>
            <p>Na Mirage, acreditamos que a programação e a inteligência artificial têm o poder de transcender as barreiras convencionais da expressão visual. Estamos comprometidos em moldar um futuro onde a criatividade é amplificada pela capacidade de codificação, proporcionando experiências visuais que deslumbram e inspiram.</p>
            <br></br>
            <p>Junte-se a nós nessa jornada emocionante pela interseção entre programação e arte. Seja você um entusiasta, estudante, profissional ou simplesmente curioso, a Mirage é o lugar onde a imaginação encontra o código, criando um horizonte infinito de possibilidades visuais. Bem-vindo à revolução Mirage - onde a visão encontra o algoritmo.</p>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
  