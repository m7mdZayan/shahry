const Avatar = ({imgSrc , userName}) => {
    return ( <div className="avatar">
        <img src={imgSrc} alt= {`${userName} Avatar`} />
    </div> );
}
 
export default Avatar;