import { ComponentProps } from "react";
import {twMerge} from 'tailwind-merge'
interface TableCellProps extends ComponentProps<'th'>{}


export function TableCell(props: TableCellProps) {
    return(
        <td  {...props} className={twMerge("py-3 px-4 text-sm text-zinc-300", props.className)}/>
        // Quando a classe receber um novo atributo ele não será adicionado ao que tinha anteriormente . 
        //Ele irá remover o que tinha antes
        //Para acrescentear ao invés de substituir , vamos usar o tailwind-merge
        // o último valor a ser declarado é mais importante, por isso 
        //colocamos o ..props antes para não substituir as classes

    )
}