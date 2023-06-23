import { createClient } from "@/prismicio";
import HeaderWrapper from "@/components/Header";

export default function Home({ page, header }) {
  return (
    <>
      <div>
        <HeaderWrapper header={header} />
        {
          JSON.stringify(page, null, 2)
        }
      </div>
    </>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle('homepage');
  const header = await client.getSingle('header');

  return {
    props: { page, header },
  };
}
