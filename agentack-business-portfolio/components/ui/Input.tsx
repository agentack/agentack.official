interface InputProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  type?: string
  id: string
  register?: any
}

export function Input({ label, placeholder, error, disabled, type = 'text', id, register }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[12px] text-sage-mid mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        className={`
          w-full bg-transparent border rounded-[7px] px-[14px] py-2.5
          font-body font-normal text-[13px] text-sage-light
          placeholder:text-sage-dark
          focus:outline-none focus:border-green-primary focus:ring-1 focus:ring-[rgba(0,255,136,0.2)]
          disabled:opacity-40 disabled:cursor-not-allowed
          transition-all duration-150
          ${error ? 'border-red-danger' : 'border-[#2A3A30]'}
        `}
      />
      {error && (
        <p className="text-red-danger text-[11px] mt-1">{error}</p>
      )}
    </div>
  )
}
