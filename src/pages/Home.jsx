import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return(
    <div>
      <div className="max-w-[1200px] w-full mx-auto flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-10 sm:gap-20 px-6">
        <p className="p-10 m-10">
          <span className="text-[20px]">Olá, eu sou</span><br/>
          <span className="text-[40px]">Matheus Degrande</span><br />

          E sou um{' '}
          
          <TypeAnimation
            sequence={['Desenvolvedor Front-End em formação', 3000,
            '', 1000,
            'Apaixonado por tecnologia e design', 3000,
            '', 1000,]}
            speed={50}
            wrapper="span"
            style={{ fontSize: '18px', display: 'inline-block', color: '#a855f7' }}
            repeat={Infinity}
            cursor={false}
          /><br />

          Estudo Ciência da Computação e Tenho experiência com HTML, CSS, JavaScript, React e Tailwind CSS, e estou sempre evoluindo para transformar ideias em experiências web interativas e acessíveis. <br />

          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Curriculo.pdf';
              link.download = 'Curriculo_MatheusDegrande.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="mt-4 rounded-full border-2 border-purple-600 border-solid text-purple-500 h-[6vh] w-[17vh] hover:text-purple-700 hover:border-purple-800 cursor-pointer hover:bg-neutral-900"

          >
            Download CV
          </button>
        </p>
        <img
          src="https://theus-2005.github.io/meu-portifolio/images/foto.jpg"
          alt="Foto de Perfil"
          className="w-[70vw] sm:w-[30vw] max-w-[300px] rounded-full mb-6 sm:mb-0 mt-4"
        />

      </div>
    </div>
  )
}
