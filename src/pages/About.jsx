import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <h1 className="mt-10 font-extrabold">Sobre mim</h1>
        <p className="p-10 m-10 text-[20px] font-light text-center">
          Olá! Meu nome é <span className="text-purple-500">Matheus Degrande</span>, sou desenvolvedor front-end com foco
          em criar interfaces modernas, responsivas e funcionais. Atualmente,
          estou cursando Ciência da Computação na Universidade Paulista (UNIP) e
          já conclui o curso técnico em Desenvolvimento de Sistemas pela ETEC. <br /> <br />

          Tenho experiência prática com <span className="text-purple-500">HTML, CSS, JavaScript, React.js e
          Tailwind CSS</span>, além de conhecimentos em <span className="text-purple-500">Java, Python e GML</span>. Desenvolvo
          projetos autorais que simulam sistemas reais, como lojas virtuais e
          coleções interativas, sempre buscando aplicar boas práticas de
          usabilidade, acessibilidade e performance. Sou curioso por natureza e
          estou sempre em busca de aprender novas tecnologias e melhorar minhas
          habilidades. <br /><br />
          
          Meu objetivo é transformar ideias em experiências
          digitais marcantes e eficientes. <br /><br />

          <TypeAnimation
            sequence={[
              'Unindo criatividade e tecnologia.',
              2000,
              'Transformando ideias em código.',
              2000,
              'Vivendo no modo dark.',
              2000,
              'Aprendendo todos os dias.',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-purple-500 font-light"
            cursor={false}
          />
        </p>
      </div>
    </div>
  );
}
