/**
 * @typedef {import("@prismicio/client").Content.BlogWrappedTextSlice} BlogWrappedTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogWrappedTextSlice>} BlogWrappedTextProps
 * @param {BlogWrappedTextProps}
 */
const BlogWrappedText = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_wrapped_text (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogWrappedText;
