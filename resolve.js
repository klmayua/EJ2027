import resolveURI from '@jridgewell/resolve-uri';

export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  const { searchParams } = new URL(request.url);
  const base = searchParams.get('base') || 'http://localhost/';
  const input = searchParams.get('input') || '';
  
  return new Response(JSON.stringify({ resolved: resolveURI(input, base) }));
}