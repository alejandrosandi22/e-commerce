import Link from 'next/link';

export default function LinkEffect({
  href,
  caption,
  icon,
}: {
  href: string;
  caption?: string;
  icon?: string;
}) {
  return (
    <li className='link__effect__list'>
      <Link href={href}>
        <a className='link__effect__anchor'>
          {icon ? <i className={icon}></i> : caption}
        </a>
      </Link>
    </li>
  );
}
