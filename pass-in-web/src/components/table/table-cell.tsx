import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<'th'>{

}


export function TableCell(props: TableCellProps) {
    return(
        <td className="py-3 px-4 text-sm text-zinc-300" {...props}/>
    )
}