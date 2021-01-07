export default function Layout(props) {
  return (
    <div className="container">
      <header></header>
      <main>{props.children}</main>
      <footer></footer>
    </div>
  )
}