/**
 * @typedef {import("@prismicio/client").Content.BlogImgSlice} BlogImgSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogImgSlice>} BlogImgProps
 * @param {BlogImgProps}
 */
const BlogImg = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_img (variation: {slice.variation}) Slices
    </section>
  );
};

export default BlogImg;
