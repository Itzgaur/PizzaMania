export default function Button({ children,onclick,className,type }) {
  let style = `rounded-full border-none bg-red-400 px-4 py-3 hover:bg-red-500 hover:ring hover:ring-red-500 hover:ring-offset-2`;
   
  let appliedStyle=style
  let small ="rounded-full bg-red-400 px-2 hover:bg-red-500"

  if(type === "small")  appliedStyle=small
  

  if (className) 
     appliedStyle = style +" "+ className
  
  if(onclick) return  <button className={appliedStyle} onClick={onclick}>{children}</button>;

  return <button className={appliedStyle}>{children}</button>;
}
