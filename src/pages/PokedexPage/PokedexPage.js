import Card from "../../components/Card/Card";
import { Container } from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex } = context;

  return (
    <Container>
      <Header />
      <section>
        {pokedex.map((pokemon) => (
          <Card key={pokemon.name} pokemonUrl={`${BASE_URL}/${pokemon.name}`} />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
