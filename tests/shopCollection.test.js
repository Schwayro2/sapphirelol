import { getCollection } from 'astro:content';

(async () => {
  try {
    const products = await getCollection('shop');
    if (!products || products.length === 0) {
      throw new Error('No products returned');
    }
    console.log('Test passed: products length =', products.length);
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
})();
