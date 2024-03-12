/**
 * @typedef {import("@prismicio/client").Content.RoadmapItemSlice} RoadmapItemSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<RoadmapItemSlice>} RoadmapItemProps
 * @param {RoadmapItemProps}
 */
const RoadmapItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for roadmap_item (variation: {slice.variation})
      Slices
    </section>
  );
};

export default RoadmapItem;
