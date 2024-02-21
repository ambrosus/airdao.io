export function getFooterBlockSlice(data) {
  let slices = [];
  const footerBlockTypes = ['footer_events', 'footer_contact'];

  Object.keys(data).forEach(el => {
    if (el.includes('slices')) {
      slices = data[el];
    }
  });

  return slices.find(({ slice_type }) => footerBlockTypes.includes(slice_type))
    ?.slice_type;
}
