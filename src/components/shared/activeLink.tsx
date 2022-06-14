import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const { asPath } = router;

  return (
    <li className={asPath === href ? className : ''}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
}
