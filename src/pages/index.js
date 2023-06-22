import { createClient } from "@/prismicio";

export default function Home({ page }) {
  return (
    <>
      <div>
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

  return {
    props: { page },
  };
}
