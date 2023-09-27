import { createClient } from '@/prismicio';
import HeaderWrapper from '@/components/Header';
import Footer from '@/components/Footer';
import TextBlock from '@/pages/team/components/TextBlock';

const TeamPage = ({ header, footerText, page }) => (
  <>
    {header && <HeaderWrapper header={header} />}
    <div style={{ overflow: 'auto' }}>
      <TextBlock
        story={page.data.story}
        illustration={page.data.illustration}
        mission={page.data.mission}
        vision={page.data.vision}
      />
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
