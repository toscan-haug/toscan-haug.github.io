import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';

const VideoPage = () => {
  return (
    <ScrolledPage className="video-page" title="Animations">
      {/* ************************** */}
      <Section title="Ver de Terre au Texas">
        <YoutubePlayer url="https://www.youtube.com/embed/k3kr1lKJxNk" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Blender <br />
              <br />
              Modélisation d'un décor de désert<br />
              Shader "cartoon"<br />
              Animation d'un personnage<br />
              Travail sur les travelings et les flous<br/>
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Lampe Sin City">
        <YoutubePlayer url="https://www.youtube.com/embed/Om28fgxLJQQ" />
        <FlipFlop
          recto={
            <>
              <h3> </h3>
              Production sur Maya <br />
              <br />
              Travail de stage à l'ESRA <br />
              Rigging de la lampe<br />
              Suivi de trajectoire<br />
              Palette inspirée du film Sin City<br />
            </>
          }
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default VideoPage;
