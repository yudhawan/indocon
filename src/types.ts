export type IconProps ={
    name:{src:string}
    classname?:string
    title?:string
}
export type ButtonTicketProps={
    link:string
    text:string|React.JSX.Element
    classname?:string
}
export type CardBasicProps={
    icon:React.JSX.Element
    classname?:string
    background:string
    content:string | React.JSX.Element
}

export type CardListLinkProps={
    title:string
    content:string
    url:string
    backgroundColor:string
}