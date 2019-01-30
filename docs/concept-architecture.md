# Architecture

## SDD: Slice Driven Development

In Prismic, Slices are reusable custom components defined in the CMS with
specific content fields. Slices can be stacked and re-ordered on-the-fly as
needed. Individual pages can be constructed using these reusable components to
create unique layouts.

With this technique, traditional CMS functionality with multiple templates, one
for each page type, becomes unnecessary. Instead, a single template with logic
to render Slices as requested can be used. This reduces technical debt since
each block of content has a single source of functionality and styling.

Let's call this technique Slice Driven Development, or SDD for short.

For more information on thinking with Slices, read the [Slices](concept-slices.md) concept document.

For instructions on creating a Slice, read the [Create a
Slice](guide-create-a-slice.md) guide.

For more technical information on Prismic Slices, read Prismic's [official
Slices documentation][slices-docs].

[slices-docs]: https://user-guides.prismic.io/content-modeling-and-custom-types/field-reference/slices
