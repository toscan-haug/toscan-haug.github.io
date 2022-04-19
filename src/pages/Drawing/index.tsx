import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';

const DrawingPage = () => {
  return (
    <ScrolledPage className="drawing-page" title="Dessins">
      {/* ************************** */}
      <Section title="Donut">
        <div className="image-player donut-image" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Blender <br />
              <br />
              Sculpting et modélisation <br />
              Texturing complexe <br />
              Travail sur les liquides
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Bagel">
        <div className="image-player bagel-image" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Blender <br />
              <br />
              Exploration du shader "cartoon" <br />
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Caricature de JuiceWrld">
        <div className="image-player juice-wrld-image" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Affinity <br />
              <br />
              Caricature faite sur tablette graphique <br />
              Recherche sur les brushs <br />
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Marbrures">
        <div className="image-player warped-image" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Affinity <br />
              <br />
              Gestion de palette <br />
              Effet "Glow" manuel <br />
              Composition de distorsions <br />
            </>
          }
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default DrawingPage;
