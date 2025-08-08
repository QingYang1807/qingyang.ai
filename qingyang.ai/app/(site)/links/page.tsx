import Link from 'next/link'

const links = [
  { name: 'GitHub', href: 'https://github.com/QIngYang1807' },
  { name: 'Twitter/X', href: 'https://x.com' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com' }
]

export default function LinksPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <h1 className="text-2xl font-bold">社交链接</h1>
      <ul className="mt-6 space-y-3">
        {links.map(l => (
          <li key={l.name}>
            <Link className="block w-full rounded border p-3 hover:shadow" href={l.href} target="_blank" rel="noopener noreferrer">
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

