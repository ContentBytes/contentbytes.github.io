import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export function ButtonWhite({ link, label }) {
    return (
        <Link to={link}>
            <button
                className={clsx(
                    styles.container,
                    styles.white,
                )}>
                {label}
            </button>
        </Link>
    )
}

export function ButtonBlack({ link, label }) {
    return (
        <Link to={link}>
            <button
                className={clsx(
                    styles.container,
                    styles.black,
                )}>
                {label}
            </button>
        </Link>
    )
}