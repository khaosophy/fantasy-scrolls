export default function Layout(props) {
  return (<>
    <header></header>
    <main>{props.children}</main>
    <footer></footer>
  </>)
}