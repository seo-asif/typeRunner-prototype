
type FooterProps = {occupation: string}

const Footer =(props:FooterProps)=>{
    return(
        <div>{props.occupation}</div>
    )
}
export default Footer;