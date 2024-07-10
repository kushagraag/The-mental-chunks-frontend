export default function Blog({ params }: { params: { blogId: string } }) {
  return <h1>The mental chunks Blog {params.blogId}</h1>;
}
