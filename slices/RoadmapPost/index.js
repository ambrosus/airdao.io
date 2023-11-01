/**
 * @typedef {import("@prismicio/client").Content.RoadmapPostSlice} RoadmapPostSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RoadmapPostSlice>} RoadmapPostProps
 * @param {RoadmapPostProps}
 */
const RoadmapPost = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for roadmap_post (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RoadmapPost;
