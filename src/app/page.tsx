import Link from "next/link";

export default function Page() {
    return (
        <>
            <div>Hello,World!</div>
            <ul>
                <li>
                    <Link href="/foo" prefetch={true}>foo</Link>
                </li>
            </ul>
        </>
    );
}
