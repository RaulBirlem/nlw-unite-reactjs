
import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TalbeHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"

export function AttendeeList() {
    return (
       
       <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participantes</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                <Search className="size-4 text-esmerald-300"/> 
                <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm " placeholder="Buscar participantes..." />
            </div>
        </div>

        <Table>
            <thead>
                <tr className="border-b border-white/10">
                    <TalbeHeader style={{width:48}} >
                        <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " />
                    </TalbeHeader>
                    <TalbeHeader >Código</TalbeHeader>
                    <TalbeHeader >Participantes</TalbeHeader>
                    <TalbeHeader >Data de inscrição</TalbeHeader>
                    <TalbeHeader >Data do check-in</TalbeHeader>
                    <TalbeHeader style={{width:64}} ></TalbeHeader>
                </tr>
            </thead>
            <tbody>
            {Array.from({length:8}).map((_, i)=>{
                return (
                    <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                    <TableCell >
                       <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 "/>
                   </TableCell>
                    <TableCell >12383</TableCell>
              
                <TableCell >
                   <div className="flex flex-col gap-1">
                       <span className="font-semibold text-white">Diego Schell Fernandes</span>
                       <span>diego@rocketseat.com.br</span>
                   </div>
               </TableCell>
                <TableCell >7 dias atrás</TableCell>
                <TableCell >3 dias atrás</TableCell>
                <TableCell >
                    <IconButton transparent> {/*//*? Envia o valor transparente como true */}
                        <MoreHorizontal className="size-4" />
                    </IconButton>
                    
                    </TableCell> 
               </tr>
                )
            })}
            </tbody>
            <tfoot>
                <tr>
                    <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                        Mostrando 10 de 228 itens
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                        <div className="inline-flex items-center gap-8">
                        <span>Página 1 de 23</span>

                            <div className="flex gap-1.5">

                            <IconButton>
                                <ChevronsLeft className="size-4" />
                            </IconButton>
                            <IconButton>
                                <ChevronLeft className="size-4" />
                            </IconButton>
                            <IconButton>
                                <ChevronRight className="size-4" />
                            </IconButton>
                            <IconButton>
                                <ChevronsRight className="size-4" />
                            </IconButton>
                        </div>

                        </div>
                    </TableCell>
                </tr>
            </tfoot>
        </Table>
        
       
     </div>
      
    )
}