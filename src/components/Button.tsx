export default function Button({ 
    children, 
    onClick,
    type = 'primary'
 }: { 
    children: React.ReactNode, 
    onClick?: () => void,
    type?: 'primary' | 'secondary'
 }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-2xl 
        ${type === 'primary' 
        ? 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800' 
        : 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400'
        } transition-colors duration-200`}
    >
      {children}
    </button>
  )
}
