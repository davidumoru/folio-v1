import Link from 'next/link'

function StyledButton({ href, label }: { href: string; label: string }) {
  return (
    <button className="animate-bounce-smooth rounded-md border border-primary-400 px-3 py-3 font-medium text-primary-500 shadow-lg shadow-primary-50 hover:text-primary-600 dark:border-primary-600 dark:shadow-primary-900 dark:hover:text-primary-400">
      <Link href={href}>{label}</Link>
    </button>
  )
}

export default StyledButton
