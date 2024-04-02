import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'>{
 //! navlink agora pode receber todas as propriedades que um href html recebe,
// * usando <'a'>
 children: string  // ! tipagem da prop
    
}

export function NavLink (props: NavLinkProps) {
    
    return (
        <a {...props} className='font-medium text-sm'>
            {/* ...props permite todas as propriedades para receber */}
            {props.children}
        </a>

    )
}