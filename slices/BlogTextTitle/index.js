/**
 * @typedef {import("@prismicio/client").Content.BlogTextTitleSlice} BlogTextTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogTextTitleSlice>} BlogTextTitleProps
 * @param {BlogTextTitleProps}
 */
const BlogTextTitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_text_title (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogTextTitle;
