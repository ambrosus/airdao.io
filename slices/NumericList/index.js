/**
 * @typedef {import("@prismicio/client").Content.NumericListSlice} NumericListSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NumericListSlice>} NumericListProps
 * @param {NumericListProps}
 */
const NumericList = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for numeric_list (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NumericList;
