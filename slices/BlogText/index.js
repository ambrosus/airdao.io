/**
 * @typedef {import("@prismicio/client").Content.BlogTextSlice} BlogTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogTextSlice>} BlogTextProps
 * @param {BlogTextProps}
 */
const BlogText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_text (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogText;
