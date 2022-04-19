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
      <Section title="Lampe Sin City">
        <YoutubePlayer url="https://www.youtube.com/embed/Om28fgxLJQQ" />
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

export default VideoPage;
