export default function Project({ title, description, image, link }) {
  return (
    <div className="w-[40vh] h-[50vh] rounded-md border-purple-500 border-4 flex flex-col items-center">
      <img
        className="rounded-md border-2 border-red-600 w-[36vh] mt-4 mb-4"
        src={image}
        alt={title}
      />
      <h2 className="font-extrabold text-[24px]">{title}</h2>
      <p className="text-center text-neutral-300 px-4 h-[150px] overflow-hidden">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 rounded-full border-2 border-purple-600 text-purple-500 px-6 py-2 hover:text-purple-700 hover:border-purple-800 hover:bg-neutral-900 transition-all duration-300 mb-5"
      >
        Ir para o site
      </a>
    </div>
  );
}
