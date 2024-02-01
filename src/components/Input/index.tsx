
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    placeholder: string
    typeInput: string
} 

export default function Input({ placeholder, typeInput, ...props }:InputProps) {
    return (
        <input
          {...props}
          type={typeInput}
          className="text-sm rounded-md p-3 w-full border border-gray-300 focus:border-pink-300"
          placeholder={placeholder}
          required
          style={{
            backgroundColor: '#161616',
            color: '#e9e6e1',
          }}
        >
        </input>
      )
      
}