interface H1Props {
    message: string
  }
  
  export const H1 = ({ message }: H1Props) => {
    return (
  
      <h1
        // className='text-lg font-bold text-slate-50  lg:text-xl xl:text-2xl 2xl:text-3xl'>
        className='title'> {message}</h1>
    )
  }