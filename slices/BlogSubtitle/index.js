/**
 * @typedef {import("@prismicio/client").Content.BlogSubtitleSlice} BlogSubtitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSubtitleSlice>} BlogSubtitleProps
 * @param {BlogSubtitleProps}
 */
const BlogSubtitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_subtitle (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogSubtitle;
