export default function Button({ children,onclick,className }) {
  let style = `rounded-full border-none bg-red-400 px-4 py-3 hover:bg-red-500 hover:ring hover:ring-red-500 hover:ring-offset-2`;

  if (className) 
     style = style +" "+ className
  

  if(onclick) return  <button className={style} onClick={onclick}>{children}</button>;

  return <button className={style}>{children}</button>;
}
