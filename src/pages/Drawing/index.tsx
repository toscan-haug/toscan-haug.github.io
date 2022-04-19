import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';

const DrawingPage = () => {
  return (
    <ScrolledPage className="drawing-page" title="Dessins">
      {/* ************************** */}
      <Section title="Donut 'n Tea">
        <div className="image-player donut-image" />
        <FlipFlop
          recto={
            <>
              Composition pour Jeune Homme <br />
              <br />
              Univers de la neige et du cartoon. <br />
              <br />
              Sons secs et rebondissants <br />
              Illustrer les soubresauts.
            </>
          }
          verso={
            <>
              Production sur FL et Synthétiseur <br />
              <br />
              Basse en sound design <br />
              Sample de grincements <br />
              Rythmique expérimentale
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Sweet Bagel">
        <div className="image-player bagel-image" />
        <FlipFlop
          recto={
            <>
              Composition pour Jeune Homme <br />
            </>
          }
          verso={
            <>
              Production sur FL et Synthétiseur <br />
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Juice Wrld">
        <div className="image-player juice-wrld-image" />
        <FlipFlop
          recto={
            <>
              Composition pour Jeune Homme <br />
            </>
          }
          verso={
            <>
              Production sur FL et Synthétiseur <br />
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Image 4">
        <div className="image-player warped-image" />
        <FlipFlop
          recto={
            <>
              Composition pour Jeune Homme <br />
            </>
          }
          verso={
            <>
              Production sur FL et Synthétiseur <br />
            </>
          }
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default DrawingPage;
