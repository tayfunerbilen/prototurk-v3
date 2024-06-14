import Categories from "./sections/categories";
import LastQuestions from "./sections/last-questions";
import Articles from "./sections/articles";
import LastUsers from "./sections/last-users";
import SocialCard from "~/components/cards/social";
import OpacityContent from "~/components/animated/opacity";
import {useEffect, useState} from "react";

export default function Home() {

    const [codes, setCodes] = useState([])
    const [scan, setScan] = useState(false)

    useEffect(() => {
        if (scan) {
            const ndef = new NDEFReader();
            ndef.scan()
                .then(() => {
                    ndef.addEventListener("reading", ({ message, serialNumber }) => {
                        setCodes(codes => [...codes, serialNumber])
                    });
                })
        }
    }, [scan]);

    return (
        <OpacityContent className="max-w-[1200px] mx-auto">

            <div>
                <button
                    onClick={() => setScan(true)}
                >
                    Izin al
                </button>
                Okunan barkodlar:
                <div>
                    {codes.map((code, index) => (
                        <div key={index}>
                            {code}
                        </div>
                    ))}
                </div>
            </div>

            <Categories/>

            <SocialCard
                type="twitter"
                ctaUrl="https://twitter.com/prototurkcom"
            />

            <LastQuestions/>
            <Articles/>

            <SocialCard
                type="instagram"
                ctaUrl="https://instagram.com/prototurk.official"
            />

            <LastUsers/>

            <SocialCard
                type="telegram"
                ctaUrl="https://t.me/prototurk"
                ctaText="Gruba Katıl"
            />

        </OpacityContent>
    )
}
