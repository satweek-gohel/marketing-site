// File: app/products/[slug]/page.js

import { dynamicsServices } from '../../Components/Constants/dynamicsServices';
import ProductPageClient from '../[slug]/ProductPageClient';

export async function generateStaticParams() {
  return dynamicsServices.map((service) => ({
    slug: service.id,
  }));
}

export default function ProductPage({ params }) {
  const data = dynamicsServices.find((service) => service.id === params.slug);

  if (!data) {
    return null; // or you could return a custom 404 page
  }

  return <ProductPageClient data={data} />;
}