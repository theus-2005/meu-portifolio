export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-4 bg-gray-600 rounded-md mt-1 overflow-hidden relative">
      <div
        className="h-4 bg-green-500 rounded-md flex items-center justify-center text-white text-xs font-semibold"
        style={{ width: `${progress}%` }}
      >
        {/* Texto visível só se tiver espaço */}
        {progress >= 15 && `${progress}%`}
      </div>

      {/* Texto fixo posicionado à direita para alinhamento consistente */}
      {progress < 15 && (
        <div className="absolute left-1 top-0 h-4 flex items-center text-white text-xs font-semibold">
          {progress}%
        </div>
      )}
    </div>
  );
}
