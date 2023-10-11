/**
 * @typedef {import("@prismicio/client").Content.FooterContactSlice} FooterContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterContactSlice>} FooterContactProps
 * @param {FooterContactProps}
 */
const FooterContact = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for footer_contact (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FooterContact;
