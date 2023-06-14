import { Helmet } from "react-helmet"

export default function MonsterList() {
  return (
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Monster List</title>
        <meta name="description" content="Peruse the monsters of the multiverse with these easy-to-use filters." />
      </Helmet>
      <h1>Monsters</h1>
    </div>
  )
}