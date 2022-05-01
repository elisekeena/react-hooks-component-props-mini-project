
function Header(props) {
    console.log(props)
    return (
      <div>
        <header>
          <h1>{props.name}</h1>
        </header>
      </div>
    )
}
export default Header