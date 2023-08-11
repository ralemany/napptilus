function Image (props) {
  return (
    <picture>
      <source srcSet={props.imgUrl}/>
      <img src={props.imgUrl} alt={props.model} />
    </picture>
  )
}

export default Image
