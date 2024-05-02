/* eslint-disable react/prop-types */

export default function InputField({label,required,placeholder,disabled=false,register,defaultValue="",registerName,type="text"}) {
  return (
    <div className='flex flex-col gap-1'>
      {label && <p className="text-gray-800 font-semibold text-sm">{label} {required && <span className='text-red-500'>*</span>}</p>}
      <input disabled={disabled} className="border outline-none focus-visible:border-gray-700 text-sm py-[6px] px-2" type={type} placeholder={placeholder} defaultValue={defaultValue} {...register(registerName) }/>
    </div>
  )
}
