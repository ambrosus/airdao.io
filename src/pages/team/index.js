import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import TextBlock from 'src/components/Team/TextBlock';
import Team from 'src/components/Team/Team';
import Marquee from '@/components/Marquee';
import Structure from 'src/components/Team/Structure';
import Ambassadors from '@/components/Homepage/Ambassadors';

const TeamPage = ({ header, footerText, page }) => (
  <>
    {header && <HeaderWrapper header={header} />}
    <div className={'team-page'} style={{ overflow: 'auto' }}>
      <TextBlock
        story={page.data.story}
        illustration={page.data.illustration}
        mission={page.data.mission}
        vision={page.data.vision}
      />
      <Team
        heading={page.data.team_heading}
        council={page.data.council_and_operations}
        tech={page.data.tech}
        community={page.data.community}
      />
      <Marquee />
      <Structure
        heading={page.data.structure_heading}
        cards={page.data.structure_cards}
        text={page.data.structure_text}
      />
      <Ambassadors />
    </div>
    {footerText && (
      <Footer
        slices={footerText.data.slices}
        mobileLink={footerText.data.footer_mobile_link_url}
        mobileLinkText={footerText.data.footer_mobile_link_text}
        mobileText={footerText.data.footer_mobile_text}
        socials={footerText.data.footer_social}
      />
    )}
  </>
);

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const header = await client.getSingle('header');
  const footer = await client.getSingle('footer');
  const page = await client.getSingle('team');
  return {
    props: { header, footerText: footer, page },
  };
}
export default TeamPage;
